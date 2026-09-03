import React from 'react';

// You might want to replace these with actual logo assets later
const LogoPlaceholder = ({ text }: { text: string }) => (
    <div className="h-12 px-6 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
        <span className="text-white font-semibold">{text}</span>
    </div>
);

const AzureTrust: React.FC = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-void">
            <div className="container px-4 mx-auto">
                <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-8">
                    Tecnología certificada por líderes de la industria
                </p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    <LogoPlaceholder text="Microsoft Partner" />
                    <LogoPlaceholder text="Azure Certified" />

                    <LogoPlaceholder text="Databricks" />
                    <LogoPlaceholder text="GitHub Enterprise" />
                </div>
            </div>
        </section>
    );
};

export default AzureTrust;
