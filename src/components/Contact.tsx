import { Mail, Instagram, MapPin } from 'lucide-react';
import logo from '@/assets/apex-logo.png';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-4">Get In <span className="text-primary">Touch</span></h2>
            <p className="text-section-muted-foreground text-lg">
              Ready to start your journey? Reach out and let's talk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-section-foreground mb-1">Email Us</h3>
                  <a href="mailto:hello@apexaccelerator.com" className="text-section-muted-foreground hover:text-primary transition-colors">
                    hello@apexaccelerator.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-section-foreground mb-1">Follow Us</h3>
                  <a href="https://instagram.com/apexaccelerator" target="_blank" rel="noopener noreferrer" className="text-section-muted-foreground hover:text-primary transition-colors">
                    @apexaccelerator
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-section-foreground mb-1">Location</h3>
                  <p className="text-section-muted-foreground">
                    Toronto, Ontario, Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-section-card border border-section-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-section-foreground mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-section-muted border border-section-border text-section-foreground placeholder:text-section-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-section-muted border border-section-border text-section-foreground placeholder:text-section-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-section-muted border border-section-border text-section-foreground placeholder:text-section-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-section-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Apex Accelerator" className="h-6 w-auto invert" />
          </div>
          <p className="text-section-muted-foreground text-sm">
            © {new Date().getFullYear()} The Apex Accelerator. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
