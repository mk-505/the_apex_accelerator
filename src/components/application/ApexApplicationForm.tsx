import { useEffect, useId, useMemo, useState, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronRight, Edit3, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "apex-accelerator-application";

type GradeOption = "Grade 9" | "Grade 10" | "Grade 11" | "Grade 12";

type FormValues = {
  activities: string;
  dateOfBirth: string;
  email: string;
  fullName: string;
  generalGrades: string;
  grade: GradeOption | "";
  motivation: string;
  parentEmail: string;
  parentName: string;
  parentPhone: string;
  phone: string;
  referralCode: string;
  whyApex: string;
  avoidLife: string;
};

type FieldKey = keyof FormValues;

type StepDefinition =
  | {
    id: string;
    kind: "statement";
    title: string;
    body: string[];
    eyebrow?: string;
    kicker?: string;
  }
  | {
    id: string;
    kind: "question";
    field: FieldKey;
    question: string;
    helper?: string;
    input: "text" | "email" | "phone" | "date" | "textarea" | "select";
    options?: GradeOption[];
    required?: boolean;
    section: "Personal Information" | "Parent Information" | "Open-Ended Questions";
    placeholder?: string;
  }
  | {
    id: string;
    kind: "review";
    title: string;
    body: string[];
  };

const gradeOptions: GradeOption[] = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];

const initialValues: FormValues = {
  activities: "",
  dateOfBirth: "",
  email: "",
  fullName: "",
  generalGrades: "",
  grade: "",
  motivation: "",
  parentEmail: "",
  parentName: "",
  parentPhone: "",
  phone: "",
  referralCode: "",
  whyApex: "",
  avoidLife: "",
};

const steps: StepDefinition[] = [
  {
    id: "welcome",
    kind: "statement",
    eyebrow: "Selective Application",
    kicker: "Estimated time: 10 to 20 minutes",
    title: "The Apex Accelerator - Application Form",
    body: ["A selective, mentorship-driven accelerator for students aiming higher."],
  },
  {
    id: "before-you-apply",
    kind: "statement",
    eyebrow: "Before You Apply",
    title: "Before You Apply",
    body: [
      "The Apex Accelerator is an application-based program designed for students who are serious about their growth: academically, personally, and long-term.",
      "We don't care if your application is perfect or not, we care about clarity, honesty, and intention.",
      "There are no trick questions, no ideal answers, and no expectations of polish. We’re simply trying to understand who you are, how you think, and what you’re willing to work toward.",
      "Take your time. Answer genuinely.",
    ],
  },
  {
    id: "referral-code",
    kind: "question",
    field: "referralCode",
    question: "If you were inspired by someone to apply, please put their referral code here.",
    input: "text",
    required: false,
    section: "Personal Information",
    placeholder: "Optional referral code",
  },
  {
    id: "personal-info-intro",
    kind: "statement",
    eyebrow: "Section 1",
    title: "Personal Information",
    body: ["Please provide your details below so we can identify and contact you."],
  },
  {
    id: "full-name",
    kind: "question",
    field: "fullName",
    question: "What is your full name?",
    input: "text",
    required: true,
    section: "Personal Information",
    placeholder: "Your full name",
  },
  {
    id: "email",
    kind: "question",
    field: "email",
    question: "What is your email address?",
    input: "email",
    required: true,
    section: "Personal Information",
    placeholder: "you@example.com",
  },
  {
    id: "phone",
    kind: "question",
    field: "phone",
    question: "What is your phone number?",
    input: "phone",
    required: true,
    section: "Personal Information",
    placeholder: "(555) 123-4567",
  },
  {
    id: "date-of-birth",
    kind: "question",
    field: "dateOfBirth",
    question: "What is your Date of Birth?",
    input: "date",
    required: true,
    section: "Personal Information",
  },
  {
    id: "grade",
    kind: "question",
    field: "grade",
    question: "What will your grade be as of September 2026?",
    input: "select",
    options: gradeOptions,
    required: true,
    section: "Personal Information",
  },
  {
    id: "general-grades",
    kind: "question",
    field: "generalGrades",
    question: "Tell us your general grades from the year you are currently in.",
    input: "textarea",
    helper:
      "For example: Science 95, English 80, Functions 88. Grades are not a deciding factor in our selection. We ask only to understand your current starting point.",
    required: true,
    section: "Personal Information",
    placeholder: "List your current courses and approximate grades.",
  },
  {
    id: "activities",
    kind: "question",
    field: "activities",
    question: "Extracurricular Activities",
    input: "textarea",
    helper: "We’re interested in what you’re involved in, not how long the list is.",
    required: true,
    section: "Personal Information",
    placeholder: "Tell us what you spend your time on outside the classroom.",
  },
  {
    id: "parent-info-intro",
    kind: "statement",
    eyebrow: "Section 2",
    title: "Parent Information",
    body: [
      "Please provide your guardian's details below. The purpose of this is to keep your parents involved and aware of the process.",
    ],
  },
  {
    id: "parent-name",
    kind: "question",
    field: "parentName",
    question: "Parent's Name",
    input: "text",
    required: true,
    section: "Parent Information",
    placeholder: "Parent or guardian name",
  },
  {
    id: "parent-email",
    kind: "question",
    field: "parentEmail",
    question: "Parent's Email",
    input: "email",
    required: true,
    section: "Parent Information",
    placeholder: "parent@example.com",
  },
  {
    id: "parent-phone",
    kind: "question",
    field: "parentPhone",
    question: "Parent's Phone Number",
    input: "phone",
    required: true,
    section: "Parent Information",
    placeholder: "(555) 987-6543",
  },
  {
    id: "open-ended-intro",
    kind: "statement",
    eyebrow: "Section 3",
    title: "Open-Ended Questions",
    body: [
      "There is no word limit for the questions below. Write as much or as little as you genuinely need. Do not add fluff. Do not write what you think we want to hear.",
      "There are no right or wrong answers, we are simply trying to understand you beyond grades and activities.",
      "This is the part that matters — we want to understand YOU.",
    ],
  },
  {
    id: "avoid-life",
    kind: "question",
    field: "avoidLife",
    question: "What life do you want to avoid for yourself in the future?",
    input: "textarea",
    required: true,
    section: "Open-Ended Questions",
    placeholder: "Be direct. What are you trying not to become or settle for?",
  },
  {
    id: "motivation",
    kind: "question",
    field: "motivation",
    question: "What drives/motivates you?",
    input: "textarea",
    required: true,
    section: "Open-Ended Questions",
    placeholder: "What keeps you moving when things get difficult?",
  },
  {
    id: "why-apex",
    kind: "question",
    field: "whyApex",
    question:
      "Lastly, why are you interested in joining and what are you hoping to accomplish through this accelerator?",
    input: "textarea",
    required: true,
    section: "Open-Ended Questions",
    placeholder: "Why this program, and what outcome are you seeking?",
  },
  {
    id: "review",
    kind: "review",
    title: "Review your application",
    body: [
      "Before you submit, read through each section once more and make sure it sounds like you.",
      "You can jump back into any section to refine an answer.",
    ],
  },
];

type PersistedState = {
  currentStep: number;
  values: FormValues;
};

const reviewSections: Array<{
  title: "Personal Information" | "Parent Information" | "Open-Ended Questions";
  fields: Array<{ label: string; field: FieldKey }>;
  jumpTo: string;
}> = [
    {
      title: "Personal Information",
      jumpTo: "personal-info-intro",
      fields: [
        { label: "Full name", field: "fullName" },
        { label: "Email", field: "email" },
        { label: "Phone", field: "phone" },
        { label: "Date of Birth", field: "dateOfBirth" },
        { label: "Grade in September 2026", field: "grade" },
        { label: "General Grades", field: "generalGrades" },
        { label: "Extracurricular Activities", field: "activities" },
      ],
    },
    {
      title: "Parent Information",
      jumpTo: "parent-info-intro",
      fields: [
      { label: "Parent's Name", field: "parentName" },
      { label: "Parent's Email", field: "parentEmail" },
      { label: "Parent's Phone Number", field: "parentPhone" },
      { label: "Referral Code", field: "referralCode" },
    ],
  },
    {
      title: "Open-Ended Questions",
      jumpTo: "open-ended-intro",
      fields: [
        { label: "Life to Avoid", field: "avoidLife" },
        { label: "Motivation", field: "motivation" },
        { label: "Why Apex", field: "whyApex" },
      ],
    },
  ];

const questionSteps = steps.filter((step): step is Extract<StepDefinition, { kind: "question" }> => step.kind === "question");

const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value.trim());
const validatePhone = (value: string) => value.replace(/\D/g, "").length >= 10;

const validateField = (field: FieldKey, values: FormValues) => {
  const value = values[field];

  switch (field) {
    case "fullName":
    case "parentName":
      return String(value).trim().length >= 2 ? "" : "Please enter a full name.";
    case "email":
    case "parentEmail":
      return validateEmail(String(value)) ? "" : "Please enter a valid email address.";
    case "phone":
    case "parentPhone":
      return validatePhone(String(value)) ? "" : "Please enter a valid phone number.";
    case "dateOfBirth":
      return String(value).trim() ? "" : "Please select your date of birth.";
    case "grade":
      return value ? "" : "Please choose your grade.";
    case "activities":
    case "avoidLife":
    case "motivation":
    case "whyApex":
      return String(value).trim().length >= 12 ? "" : "Please add a little more detail before continuing.";
    case "generalGrades":
      return String(value).trim().length >= 8 ? "" : "Please share your current subjects and approximate grades.";
    default:
      return "";
  }
};

const serializeText = (value: string) => value.trim() || "Not provided";

const formatReviewValue = (field: FieldKey, values: FormValues) => {
  if (field === "dateOfBirth" && values.dateOfBirth) {
    return new Date(`${values.dateOfBirth}T00:00:00`).toLocaleDateString(undefined, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return serializeText(String(values[field] ?? ""));
};

const QuestionShell = ({
  children,
  currentStep,
  progressValue,
  stepLabel,
  stepTitle,
}: {
  children: React.ReactNode;
  currentStep: number;
  progressValue: number;
  stepLabel: string;
  stepTitle: string;
}) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-stone-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(206,171,93,0.16),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(171,135,59,0.12),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0))]" />
      <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[#9c7a32]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-6rem] h-80 w-80 rounded-full bg-[#6f5520]/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#d3b371]">The Apex Accelerator</p>
            <h1
              className="mt-3 text-2xl text-stone-100 sm:text-3xl"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Application Experience
            </h1>
          </div>

          <div className="w-full max-w-sm space-y-2">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-stone-400">
              <span>{stepLabel}</span>
              <span>{Math.round(progressValue)}%</span>
            </div>
            <Progress
              value={progressValue}
              aria-label={`Application progress: ${Math.round(progressValue)} percent`}
              className="h-1.5 rounded-full bg-white/10"
            />
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center py-8 sm:py-10">
          <section
            key={currentStep}
            aria-labelledby="application-step-title"
            className="w-full max-w-4xl animate-in fade-in-0 slide-in-from-bottom-6 duration-500"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10 lg:p-14">
              <div className="mb-10 max-w-3xl">
                <p className="mb-4 text-xs uppercase tracking-[0.32em] text-stone-500">{stepLabel}</p>
                <h2
                  id="application-step-title"
                  className="text-4xl leading-tight text-stone-50 sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {stepTitle}
                </h2>
              </div>
              {children}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export const ApexApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [values, setValues] = useState<FormValues>(initialValues);
  const headingId = useId();

  const current = steps[currentStep];
  const totalSteps = steps.length;
  const progressValue = useMemo(() => ((currentStep + 1) / totalSteps) * 100, [currentStep, totalSteps]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);

      if (raw) {
        const parsed = JSON.parse(raw) as PersistedState;
        setValues({ ...initialValues, ...parsed.values });
        setCurrentStep(Math.min(parsed.currentStep, steps.length - 1));
      }
    } catch (error) {
      console.warn("Unable to restore saved application state.", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || isSubmitted) {
      return;
    }

    try {
      const payload: PersistedState = { currentStep, values };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
      console.warn("Unable to persist application state locally.", error);
    }
  }, [currentStep, isLoaded, isSubmitted, values]);

  useEffect(() => {
    const handleKeydown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Enter" || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName.toLowerCase();
      const isTextarea = tagName === "textarea";
      const isButton = tagName === "button";
      const isFileInput = tagName === "input" && (target as HTMLInputElement).type === "file";

      if (isTextarea || isButton || isFileInput) {
        return;
      }

      event.preventDefault();

      if (isSubmitted) {
        return;
      }

      void handleContinue();
    };

    window.addEventListener("keydown", handleKeydown as unknown as EventListener);
    return () => window.removeEventListener("keydown", handleKeydown as unknown as EventListener);
  }, [current.kind, currentStep, isSubmitted, values]);

  const setFieldValue = <K extends FieldKey>(field: K, value: FormValues[K]) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: "" }));
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const jumpToSection = (stepId: string) => {
    const destination = steps.findIndex((step) => step.id === stepId);
    if (destination >= 0) {
      goToStep(destination);
    }
  };

  const validateCurrentStep = () => {
    if (current.kind !== "question") {
      return true;
    }

    const message = validateField(current.field, values);

    if (!message) {
      return true;
    }

    setErrors((previous) => ({ ...previous, [current.field]: message }));
    return false;
  };

  const handleContinue = async () => {
    if (!validateCurrentStep()) {
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((previous) => previous + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep((previous) => previous - 1);
  };

  const submitApplication = async () => {
    const nextErrors: Partial<Record<FieldKey, string>> = {};

    for (const step of questionSteps) {
      const message = validateField(step.field, values);
      if (message) {
        nextErrors[step.field] = message;
      }
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalidField = questionSteps.find((step) => nextErrors[step.field]);
      if (firstInvalidField) {
        jumpToSection(firstInvalidField.id);
      }
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const payload = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        dateOfBirth: values.dateOfBirth,
        gradeAsOfSeptember2026: values.grade,
        generalGrades: values.generalGrades,
        extracurricularActivities: values.activities,
        parentName: values.parentName,
        parentEmail: values.parentEmail,
        parentPhone: values.parentPhone,
        referralCode: values.referralCode,
        lifeToAvoid: values.avoidLife,
        motivation: values.motivation,
        whyApex: values.whyApex,
      };

      const { error } = await supabase.from("applications").insert({
        full_name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        date_of_birth: payload.dateOfBirth,
        grade_as_of_september_2026: payload.gradeAsOfSeptember2026,
        general_grades: payload.generalGrades,
        extracurricular_activities: payload.extracurricularActivities,
        parent_name: payload.parentName,
        parent_email: payload.parentEmail,
        parent_phone: payload.parentPhone,
        referral_code: payload.referralCode.trim() || null,
        life_to_avoid: payload.lifeToAvoid,
        motivation: payload.motivation,
        why_apex: payload.whyApex,
      });

      if (error) {
        throw error;
      }

      window.localStorage.removeItem(STORAGE_KEY);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit Apex application", error);
      setSubmitError(
        "We couldn't submit your application yet. Please send an email to contact@apexaccelerator.ca and let us know there's an issue.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepLabel = isSubmitted
    ? "Application complete"
    : `Step ${currentStep + 1} of ${totalSteps}`;

  if (!isLoaded) {
    return (
      <QuestionShell currentStep={0} progressValue={0} stepLabel="Loading" stepTitle="Preparing your application">
        <div className="space-y-5 text-stone-300">
          <p className="max-w-2xl text-lg leading-relaxed text-stone-400">
            Restoring your saved progress and preparing the experience.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </QuestionShell>
    );
  }

  if (isSubmitted) {
    return (
      <QuestionShell currentStep={totalSteps - 1} progressValue={100} stepLabel={stepLabel} stepTitle="Application received">
        <div className="space-y-8 text-stone-300">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3b371]/30 bg-[#d3b371]/10 text-[#e2c98c]">
            <Check className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="max-w-3xl space-y-4">
            <p className="text-lg leading-relaxed text-stone-300">
              Thank you for taking the time to apply. Your responses have been captured and are ready to be sent to
              your backend or webhook next.
            </p>
            <p className="text-base leading-relaxed text-stone-400">
              The current implementation logs a clean payload in the browser console so you can connect submission
              logic later without refactoring the experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              onClick={() => {
                setValues(initialValues);
                setErrors({});
                setCurrentStep(0);
                setIsSubmitted(false);
                setSubmitError("");
              }}
              className="rounded-full border border-[#d3b371]/30 bg-[#d3b371] px-6 py-6 text-sm font-medium text-black hover:bg-[#e0c487]"
            >
              Start a fresh application
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => window.location.assign("/")}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-6 text-sm text-stone-200 hover:bg-white/10"
            >
              Return to home
            </Button>
          </div>
        </div>
      </QuestionShell>
    );
  }

  const continueLabel = current.kind === "review" ? "Submit application" : "Continue";

  return (
    <QuestionShell
      currentStep={currentStep}
      progressValue={progressValue}
      stepLabel={stepLabel}
      stepTitle={current.kind === "question" ? current.question : current.title}
    >
      {current.kind === "statement" ? (
        <div className="space-y-10">
          <div className="max-w-3xl space-y-5 text-base leading-8 text-stone-300 sm:text-lg">
            {current.eyebrow ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d3b371]/20 bg-[#d3b371]/8 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#d8bc7e]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {current.eyebrow}
              </div>
            ) : null}
            {current.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {current.kicker ? (
              <p className="text-sm uppercase tracking-[0.28em] text-stone-500">{current.kicker}</p>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {currentStep > 0 ? (
              <Button
                type="button"
                variant="ghost"
                onClick={handleBack}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-6 text-stone-200 hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </Button>
            ) : null}
            <Button
              type="button"
              onClick={() => void handleContinue()}
              className="rounded-full border border-[#d3b371]/20 bg-[#d3b371] px-6 py-6 text-sm font-medium text-black hover:bg-[#e0c487]"
            >
              Continue
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-sm text-stone-500">Press Enter to continue</p>
          </div>
        </div>
      ) : null}

      {current.kind === "question" ? (
        <QuestionStep
          current={current}
          error={errors[current.field]}
          headingId={headingId}
          onBack={handleBack}
          onContinue={() => void handleContinue()}
          setFieldValue={setFieldValue}
          values={values}
        />
      ) : null}

      {current.kind === "review" ? (
        <div className="space-y-8">
          <div className="max-w-3xl space-y-4 text-base leading-8 text-stone-300 sm:text-lg">
            {current.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {reviewSections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#d3b371]/25 hover:bg-white/[0.045]"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3
                    className="text-2xl text-stone-100"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {section.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => jumpToSection(section.jumpTo)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-stone-300 transition hover:border-[#d3b371]/30 hover:text-[#dfc382] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3b371]/70"
                  >
                    <Edit3 className="h-3.5 w-3.5" aria-hidden="true" />
                    Edit
                  </button>
                </div>

                <dl className="space-y-4">
                  {section.fields.map((item) => (
                    <div key={item.label} className="space-y-1.5 border-t border-white/6 pt-4 first:border-t-0 first:pt-0">
                      <dt className="text-xs uppercase tracking-[0.22em] text-stone-500">{item.label}</dt>
                      <dd className="text-sm leading-6 text-stone-200">
                        {formatReviewValue(item.field, values)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {submitError ? (
              <p className="w-full rounded-2xl border border-[#d3b371]/20 bg-[#d3b371]/8 px-4 py-3 text-sm text-[#e1c587]">
                {submitError}
              </p>
            ) : null}
            <Button
              type="button"
              variant="ghost"
              onClick={handleBack}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-6 text-stone-200 hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </Button>
            <Button
              type="button"
              onClick={() => void submitApplication()}
              disabled={isSubmitting}
              className="rounded-full border border-[#d3b371]/20 bg-[#d3b371] px-6 py-6 text-sm font-medium text-black hover:bg-[#e0c487]"
            >
              {isSubmitting ? "Submitting..." : continueLabel}
              {!isSubmitting ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
            </Button>
          </div>
        </div>
      ) : null}
    </QuestionShell>
  );
};

const QuestionStep = ({
  current,
  error,
  headingId,
  onBack,
  onContinue,
  setFieldValue,
  values,
}: {
  current: Extract<StepDefinition, { kind: "question" }>;
  error?: string;
  headingId: string;
  onBack: () => void;
  onContinue: () => void;
  setFieldValue: <K extends FieldKey>(field: K, value: FormValues[K]) => void;
  values: FormValues;
}) => {
  const helperId = `${headingId}-${current.id}-helper`;
  const errorId = `${headingId}-${current.id}-error`;
  const describedBy = [current.helper ? helperId : "", error ? errorId : ""].filter(Boolean).join(" ");

  const sharedInputClasses =
    "h-16 rounded-[1.35rem] border-white/10 bg-white/[0.04] px-5 text-lg text-stone-100 placeholder:text-stone-500 focus-visible:ring-[#d3b371]/70 focus-visible:ring-offset-[#050505]";

  const handleSelectKey = (event: KeyboardEvent<HTMLButtonElement>, option: GradeOption) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setFieldValue("grade", option);
    }
  };

  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <Label htmlFor={current.id} className="sr-only">
          {current.question}
        </Label>

        {current.helper ? (
          <p id={helperId} className="text-base leading-7 text-stone-400 sm:text-lg">
            {current.helper}
          </p>
        ) : null}
      </div>

      {current.input === "text" || current.input === "email" || current.input === "phone" || current.input === "date" ? (
        <div className="max-w-3xl">
          <Input
            id={current.id}
            type={current.input === "phone" ? "tel" : current.input}
            value={String(values[current.field] ?? "")}
            onChange={(event) => setFieldValue(current.field, event.target.value as FormValues[typeof current.field])}
            placeholder={current.placeholder}
            aria-describedby={describedBy || undefined}
            aria-invalid={Boolean(error)}
            className={sharedInputClasses}
          />
        </div>
      ) : null}

      {current.input === "textarea" ? (
        <div className="max-w-3xl">
          <Textarea
            id={current.id}
            value={String(values[current.field] ?? "")}
            onChange={(event) => setFieldValue(current.field, event.target.value as FormValues[typeof current.field])}
            placeholder={current.placeholder}
            aria-describedby={describedBy || undefined}
            aria-invalid={Boolean(error)}
            className="min-h-[220px] rounded-[1.75rem] border-white/10 bg-white/[0.04] px-5 py-5 text-lg leading-8 text-stone-100 placeholder:text-stone-500 focus-visible:ring-[#d3b371]/70 focus-visible:ring-offset-[#050505]"
          />
        </div>
      ) : null}

      {current.input === "select" ? (
        <div role="radiogroup" aria-describedby={describedBy || undefined} aria-invalid={Boolean(error)} className="grid gap-3 sm:grid-cols-2">
          {current.options?.map((option) => {
            const selected = values.grade === option;

            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setFieldValue("grade", option)}
                onKeyDown={(event) => handleSelectKey(event, option)}
                className={cn(
                  "group rounded-[1.5rem] border px-5 py-5 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3b371]/70",
                  selected
                    ? "border-[#d3b371]/60 bg-[#d3b371]/10 shadow-[0_18px_40px_rgba(211,179,113,0.12)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg text-stone-100">{option}</span>
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border text-xs uppercase tracking-[0.14em] transition",
                      selected ? "border-[#d3b371]/60 bg-[#d3b371]/15 text-[#e2c98c]" : "border-white/10 text-stone-500",
                    )}
                  >
                    {selected ? <Check className="h-4 w-4" aria-hidden="true" /> : "↵"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      ) : null}

      {error ? (
        <p id={errorId} className="text-sm text-[#d7bb83]">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3 pt-4">
        <Button
          type="button"
          variant="ghost"
          onClick={onBack}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-6 text-stone-200 hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </Button>
        <Button
          type="button"
          onClick={onContinue}
          className="rounded-full border border-[#d3b371]/20 bg-[#d3b371] px-6 py-6 text-sm font-medium text-black hover:bg-[#e0c487]"
        >
          Continue
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <p className="text-sm text-stone-500">
          {current.input === "textarea" ? "Shift + Enter adds a new line" : "Press Enter to continue"}
        </p>
      </div>
    </div>
  );
};
