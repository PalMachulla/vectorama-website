import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Oppdage" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Vi jobber tett med kundene v&aring;re for &aring; forst&aring; deres{' '}
          <strong className="font-semibold text-neutral-950">behov</strong> og
          m&aring;l. Vi g&aring;r inn i den daglige driften for &aring; avdekke
          hva som faktisk driver virksomheten fremover.
        </p>
        <p>
          V&aring;rt team av privatetterforskere skygger selskapets
          direkt&oslash;rer i flere uker, mens v&aring;e kundeansvarlige
          fokuserer p&aring; grundig gjennomgang av s&oslash;ppelet deres slik
          at vi f&aring;r god dybdeforst&aring;else av deres{' '}
          <strong className="font-semibold text-neutral-950">
            verdikjeder
          </strong>{' '}
          .
        </p>
        <p>
          Neida. Men Vi &oslash;nsker &aring; sitte tett med dere for &aring;
          kartlegge hvor modne dere er innenfor KI, og hvordan vi kan bidra med
          v&aring;r kompetanse p&aring; best mulig m&aring;te. Gjennom dialog og
          analyse identifiserer vi mulighetsomr&aring;der og utarbeider en
          skreddersydd tiln&aelig;rmingsplan.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Inkludert i denne fasen
      </h3>
      <TagList className="mt-4">
        <TagListItem>
          Dyptg&aring;ende sp&oslash;rreunders&oslash;kelser
        </TagListItem>
        <TagListItem>Mulighets- og gjennomf&oslash;rbarhetsstudier</TagListItem>
        <TagListItem>Medarbeiderunders&oslash;kelser</TagListItem>
        <TagListItem>Konseptbevis (PoC)</TagListItem>
        <TagListItem>Modenhetsanalyse innenfor KI</TagListItem>
        <TagListItem>&Oslash;vrig konsultasjon</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Bygge" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Basert p&aring; oppdagelsefasen utvikler vi en omfattende{' '}
          <strong className="font-semibold text-neutral-950">
            kj&oslash;replan
          </strong>{' '}
          for prosjektet og starter arbeidet mot leveranse. Vi velger de beste
          KI-modellene og teknologiene som passer deres spesifikke behov.
        </p>
        <p>
          Hver kunde f&aring;r tildelt en dedikert prosjektleder som holder
          kommunikasjonslinjene &aring;pne og sikrer at prosjektet holder
          kursen. De fungerer som et bindeledd mellom deres team og v&aring;re
          KI-spesialister som jobber med &aring; utvikle skreddersydde
          l&oslash;sninger.
        </p>
        <p>
          Vi jobber iterativt med regelmessige oppdateringer og demonstrasjoner,
          slik at dere hele tiden er involvert i utviklingen. Dette sikrer at
          sluttresultatet matcher forventningene og leverer reell verdi til
          deres virksomhet.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Thomas Hansen', role: 'CTO hos TechCorp' }}
        className="mt-12"
      >
        Teamet holdt oss oppdatert gjennom hele prosessen. Vi f&oslash;lte oss
        trygge p&aring; at prosjektet var i gode hender.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Levere" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          N&aring;r l&oslash;sningen er klar, gjennomf&oslash;rer vi grundig{' '}
          <strong className="font-semibold text-neutral-950">
            testing og validering
          </strong>{' '}
          for &aring; sikre at alt fungerer optimalt. Vi setter opp
          n&oslash;dvendig infrastruktur og s&oslash;rger for at systemene er
          klare for produksjon.
        </p>
        <p>
          Implementeringen skjer p&aring; en kontrollert m&aring;te, ofte i{' '}
          <strong className="font-semibold text-neutral-950">faser</strong> for
          &aring; minimere risiko. Vi overv&aring;ker n&oslash;ye ytelsen og
          justerer underveis for &aring; sikre best mulig{' '}
          <strong className="font-semibold text-neutral-950">resultat</strong>.
        </p>
        <p>
          Vi s&oslash;rger for at alle n&oslash;kkelkomponenter er{' '}
          <strong className="font-semibold text-neutral-950">
            fullt funksjonelle
          </strong>{' '}
          ved lansering. I tillegg gir vi oppl&aelig;ring til deres team slik at
          de kan ta i bruk l&oslash;sningen effektivt, med v&aring;r{' '}
          <strong className="font-semibold text-neutral-950">
            st&oslash;tte
          </strong>{' '}
          tilgjengelig for videre optimalisering.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Inkludert i denne fasen
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Grundig testing av alle komponenter for &aring; sikre kvalitet og
          p&aring;litelighet. Vi validerer at KI-modellene presterer som
          forventet i reelle scenarioer.
        </ListItem>
        <ListItem title="Infrastruktur">
          Vi setter opp robust infrastruktur tilpasset deres behov, enten det er
          sky-baserte l&oslash;sninger eller on-premise systemer.
        </ListItem>
        <ListItem title="St&oslash;tte">
          Kontinuerlig st&oslash;tte og vedlikehold sikrer at l&oslash;sningen
          fortsetter &aring; levere verdi over tid. Vi hjelper med oppdateringer
          og forbedringer etter hvert som deres behov utvikler seg.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="V&aring;re verdier"
        title="Balansere p&aring;litelighet og innovasjon"
      >
        <p>
          Vi streber etter &aring; v&aelig;re i forkant av nye trender og
          teknologier innen KI og automatisering. Vi kombinerer kjente metoder
          med nytenkning for &aring; levere l&oslash;sninger som b&aring;de er
          robuste og nyskapende. V&aring;re kjerneverdier styrer alle v&aring;re
          beslutninger.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="N&oslash;yaktig">
            Vi er detaljorienterte i v&aring;r tiln&aelig;rming til
            KI-utvikling. Hver l&oslash;sning tilpasses n&oslash;ye deres
            merkevare og behov, fra fargepalett til designprinsipper.
          </GridListItem>
          <GridListItem title="Effektiv">
            Vi er stolte av &aring; levere i tide ved &aring; bruke smarte
            verkt&oslash;y og metodikk. Erfaring gj&oslash;r oss i stand til
            &aring; jobbe raskt uten &aring; g&aring; p&aring; kompromiss med
            kvalitet.
          </GridListItem>
          <GridListItem title="Tilpasningsdyktig">
            Hver virksomhet har unike behov, og v&aring;r st&oslash;rste styrke
            er evnen til &aring; skreddерsy l&oslash;sninger som passer perfekt
            til deres spesifikke situasjon.
          </GridListItem>
          <GridListItem title="&Aring;pen">
            Vi er transparente om v&aring;re prosesser og kommuniserer klart
            gjennom hele prosjektet. Dere vil alltid vite hvor vi st&aring;r og
            hva som skjer.
          </GridListItem>
          <GridListItem title="Lojal">
            Vi bygger langsiktige relasjoner med v&aring;re kunder som g&aring;r
            utover bare &aring; levere et produkt. Vi er her for &aring;
            st&oslash;tte dere p&aring; lang sikt.
          </GridListItem>
          <GridListItem title="Innovativ">
            Det teknologiske landskapet utvikler seg konstant, og det
            gj&oslash;r vi ogs&aring;. Vi holder oss oppdatert p&aring; de
            nyeste fremskrittene innen KI og automatisering.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'V&aring;r prosess',
  description:
    'Vi tror p&aring; effektivitet og &aring; maksimere v&aring;re ressurser for &aring; gi best mulig verdi til v&aring;re kunder.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="V&aring;r prosess" title="Hvordan vi jobber">
        <p>
          Vi tror p&aring; effektivitet og &aring; maksimere v&aring;re
          ressurser for &aring; gi best mulig verdi til v&aring;re kunder. Vi
          kombinerer kjent metodikk med skreddersydde KI-l&oslash;sninger
          tilpasset kundenes unike behov.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
