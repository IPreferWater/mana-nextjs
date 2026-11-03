import ArtisanProfile from '@/components/about/ArtisanProfile';
import ManifestoContent from '@/components/about/ManifestoContent';
import MachineProfile from '@/components/about/MachineProfile';

export const metadata = {
  title: 'Mana - About',
};

export default function AboutPage() {
  return (
    <div className="cursor-crosshair">
      <div className="pt-8 pb-16 px-gutter max-w-[1440px] mx-auto min-h-screen">

        <section className="mb-stack-lg border-b border-outline-variant pb-stack-lg">
          <p className="font-label-sm text-label-sm text-tertiary tracking-widest uppercase">
            Origin
          </p>
        </section>
      <ManifestoContent />

      <section className="mb-stack-lg border-b border-outline-variant pb-stack-lg mt-12">
          <p className="font-label-sm text-label-sm text-tertiary tracking-widest uppercase">
            Staff presentation
          </p>
        </section>
        <div className="flex flex-col md:flex-row justify-between items-start gap-gutter m-10">
          <ArtisanProfile id={'IPreferWater'} label={'The fake pc expert'} job={'transform art to svg readable by the machine'} skills={{ 'Digitalizing': 48, 'Embroidery settings': 62, 'Pretending I can use pc': 101 }} />
          <MachineProfile />
          <ArtisanProfile id={'SuperKaliFlipette'} label={'The jobless artist'} job={'Create design, has the technical expertise with fabrics & use the machine'} skills={{ 'Sewing': 94, 'Usage of the embroidery machine': 72, 'technical knowledge': 88, 'Read all the book I buy': 12, 'drawing':64 }} />
        </div>
      </div>
      <div className='w-full text-center mb-20'>

      
        <a
          href="mailto:clementinestla@gmail.com"
          className="w-full border-2 border-primary py-8 px-10   uppercase text-primary text-xl hover:bg-primary hover:text-on-primary transition-all active:translate-y-1"
        >
          Start a project with us
        </a>
        </div>
    </div>
  );
}
