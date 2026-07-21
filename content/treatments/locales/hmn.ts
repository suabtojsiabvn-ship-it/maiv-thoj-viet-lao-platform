import type { TreatmentFaqItem, TreatmentTextItem } from "../types";
import type { TreatmentTranslation, TreatmentTranslations } from "../localize";

interface HmnTreatmentProfile {
  title: string;
  summary: string;
  badge: string;
  heroTitle: string;
  heroDescription: string;
  overview: readonly string[];
  benefits: readonly TreatmentTextItem[];
  candidates: readonly string[];
  steps: readonly TreatmentTextItem[];
  materials: readonly TreatmentTextItem[];
  faq: readonly TreatmentFaqItem[];
  seoDescription: string;
}

function createHmnTreatment(
  profile: HmnTreatmentProfile,
): TreatmentTranslation {
  return {
    title: profile.title,
    summary: profile.summary,
    hero: {
      badge: profile.badge,
      title: profile.heroTitle,
      description: profile.heroDescription,
      facts: [
        "Npaj txoj kev kho raws li koj tus mob",
        "Pab cov neeg tuaj txawv teb chaws",
        "Tus khub kho hniav uas ntseeg tau",
      ],
    },
    overview: {
      heading: `Kawm kom nkag siab txog ${profile.title}`,
      description: profile.overview,
    },
    benefits: {
      heading: `${profile.title} yuav pab tau li cas?`,
      description:
        "Qhov txiaj ntsig yuav txawv raws li koj cov hniav, koj lub qhov ncauj thiab txoj kev kho uas kws kho hniav pom zoo rau koj.",
      items: profile.benefits,
    },
    candidates: {
      heading: `Leej twg thiaj yuav haum rau ${profile.title}?`,
      description:
        "Tsuas yog tom qab kws kho hniav tshuaj xyuas koj lub qhov ncauj thiab cov duab kuaj tsim nyog lawm mam lees paub tau tias txoj kev kho no puas haum rau koj.",
      items: profile.candidates,
    },
    procedure: {
      heading: `Koj txoj kev kho ${profile.title}`,
      description:
        "Tus naj npawb ntawm sijhawm teem thiab lub sijhawm kho yuav nyob ntawm koj tus mob thiab txoj kev kho uas tau pom zoo.",
      steps: profile.steps,
    },
    materials: {
      heading: "Hom khoom siv thiab kev npaj kho",
      description:
        "Kws kho hniav yuav xaiv hom khoom siv raws li koj tus mob, qhov chaw ntawm tus hniav, kev tom hniav thiab yam uas haum rau koj mus ntev.",
      items: profile.materials,
    },
    faq: {
      heading: `Lus nug txog ${profile.title}`,
      items: profile.faq,
    },
    conversion: {
      heading: "Koj puas xav paub tias kauj ruam tom ntej yog dab tsi?",
      description:
        "Qhia peb txog yam uas koj txhawj, cov duab lossis ntaub ntawv uas koj muaj, thiab lub sijhawm uas koj xav tuaj Nyab Laj. Peb yuav pab npaj thawj zaug sib tham ua ntej koj txiav txim siab kho.",
      primaryAction: {
        label: "Pib Sib Tham",
        href: "/booking",
      },
      secondaryAction: {
        label: "Tham hauv WhatsApp",
        href: "#contact",
      },
      trustItems: [
        "Thawj zaug sib tham tsis yuam kom koj kho",
        "Npaj kev kho thiab txoj kev tuaj raws li koj xav tau",
        "Muaj kev pab ntau hom lus",
      ],
    },
    seo: {
      title: `${profile.title} hauv Nyab Laj | Maiv Thoj Viet Lao`,
      description: profile.seoDescription,
    },
  };
}

export const hmnTreatmentTranslations = {
  implant: createHmnTreatment({
    title: "Kev Cog Hniav Hloov Hniav Ploj",
    summary:
      "Ib txoj kev kho raws li koj tus mob los hloov hniav ploj thiab pab kom tom zaub mov tau yooj yim dua.",
    badge: "KEV COG HNIAV HAUV NYAB LAJ",
    heroTitle:
      "Hloov hniav ploj nrog txoj kev kho uas npaj raws li koj tus mob.",
    heroDescription:
      "Kev cog hniav yuav pab rov qab tau kev tom zaub mov thiab kev kaj siab thaum ib tug lossis ntau tus hniav ploj lawm. Ua ntej kho, kws kho hniav yuav tshuaj xyuas kom meej thiab piav txoj kev kho rau koj.",
    overview: [
      "Tus hniav cog yog ib qho khoom uas muab tso rau hauv pob txha los hloov tus cag hniav ploj, ces siv los tuav hniav looj, choj hniav lossis lwm yam hniav hloov.",
      "Txhua tus mob txawv. Kws kho hniav yuav tshuaj xyuas cov hniav, pos hniav thiab pob txha ua ntej qhia tias kev cog hniav puas haum rau koj.",
    ],
    benefits: [
      {
        title: "Pab kom tom zaub mov tau zoo dua",
        description:
          "Hniav uas tuav los ntawm tus hniav cog yuav pab kom koj tom zaub mov thiab siv txhua hnub tau xis dua.",
      },
      {
        title: "Pab kom lub luag ntxhi zoo li ntuj tsim",
        description:
          "Hniav kawg yuav tsim kom haum rau koj lub luag ntxhi, kev tom hniav thiab lub ntsej muag.",
      },
      {
        title: "Pab tswj cov hniav nyob ib ncig",
        description:
          "Kev hloov hniav ploj yuav pab txo qhov uas cov hniav nyob ib sab txav mus rau qhov chaw khoob.",
      },
    ],
    candidates: [
      "Cov neeg laus uas ploj ib tug lossis ntau tus hniav.",
      "Cov neeg uas xav tau hniav hloov uas nyob ruaj dua hniav tshem tau.",
      "Cov neeg uas muaj pob txha txaus lossis yuav haum rau kev pab ntxiv pob txha.",
      "Cov neeg uas tu cev qhov ncauj tau zoo thiab tuaj tshuaj xyuas tom qab tau.",
    ],
    steps: [
      {
        title: "Sib tham thiab tshuaj xyuas",
        description:
          "Kws kho hniav tshuaj xyuas koj lub qhov ncauj thiab cov duab kuaj ua ntej piav cov kev xaiv.",
      },
      {
        title: "Npaj txoj kev kho",
        description:
          "Npaj qhov chaw cog hniav, hom hniav kawg thiab lub sijhawm kho raws li koj tus mob.",
      },
      {
        title: "Muab tus hniav cog tso",
        description:
          "Muab tus hniav cog tso raws li txoj kev kho, ces cia sijhawm kom pob txha thiab qhov txhab zoo.",
      },
      {
        title: "Tso tus hniav kawg",
        description:
          "Thaum zoo txaus lawm, muab hniav looj lossis hniav hloov tso thiab kho kom tom tau xis.",
      },
      {
        title: "Saib xyuas tom qab",
        description:
          "Koj yuav tau lus qhia txog kev ntxuav hniav, kev saib xyuas thiab sijhawm rov tshuaj xyuas.",
      },
    ],
    materials: [
      {
        title: "Hom hniav cog uas xaiv raws kev kho",
        description:
          "Kws kho hniav xaiv hom hniav cog tom qab tshuaj xyuas koj tus mob thiab qhov uas haum tshaj.",
      },
      {
        title: "Hniav kawg uas tsim rau koj",
        description:
          "Hniav looj lossis hniav hloov yuav tsim kom pab tau kev siv, zoo nkauj thiab yooj yim saib xyuas.",
      },
    ],
    faq: [
      {
        question: "Kev cog hniav siv sijhawm ntev npaum li cas?",
        answer:
          "Lub sijhawm txawv raws li kev zoo ntawm qhov txhab, pob txha, tus naj npawb hniav cog thiab seb puas yuav tsum muaj lwm yam kev kho ntxiv. Kws kho hniav yuav piav lub sijhawm tom qab tshuaj xyuas.",
      },
      {
        question: "Puas yog txhua tus cog hniav tau?",
        answer:
          "Tsis yog. Nws nyob ntawm kev noj qab haus huv ntawm lub qhov ncauj, pob txha, kev noj qab haus huv ntawm lub cev thiab lwm yam. Yuav tsum tshuaj xyuas ua ntej.",
      },
      {
        question: "Kuv puas yuav tsum nyob Nyab Laj txog thaum kho tas?",
        answer:
          "Tsis tas li ntawd. Qee txoj kev cog hniav yuav tsum tuaj ntau dua ib zaug. Peb yuav pab npaj sijhawm kho thiab txoj kev tuaj tom qab paub koj tus mob meej.",
      },
    ],
    seoDescription:
      "Kawm txog kev cog hniav hauv Nyab Laj nrog txoj kev kho raws li koj tus mob thiab kev pab ntau hom lus.",
  }),
  veneers: createHmnTreatment({
    title: "Veneer Kho Kom Hniav Zoo Nkauj",
    summary:
      "Ib txoj kev kho kom cov hniav pom thaum luag muaj xim, duab thiab qhov sib npaug zoo dua.",
    badge: "VENEER HAUV NYAB LAJ",
    heroTitle:
      "Npaj lub luag ntxhi kom sib npaug dua nrog veneer uas haum koj lub ntsej muag.",
    heroDescription:
      "Veneer yuav pab kho cov hniav uas xim tsis sib xws, duab tsis sib npaug, muaj qhov khoob me lossis tsis ncaj me ntsis. Kws kho hniav yuav tshuaj xyuas ua ntej npaj lub luag ntxhi rau koj.",
    overview: [
      "Veneer yog ib daim nyias uas lo rau sab pem hauv ntej ntawm tus hniav kom hloov xim, duab, qhov loj lossis qhov uas tus hniav nyob.",
      "Veneer tsis haum rau txhua tus. Kws kho hniav yuav tshuaj xyuas hniav, pos hniav thiab kev tom hniav ua ntej qhia txoj kev kho.",
    ],
    benefits: [
      {
        title: "Kho xim hniav uas pom",
        description:
          "Veneer yuav pab rau cov hniav uas xim tsaus lossis xim tsis sib xws thiab ntxuav dawb tsis tau raws li xav.",
      },
      {
        title: "Kho duab thiab qhov loj ntawm hniav",
        description:
          "Kws kho hniav yuav npaj cov hniav kom sib npaug dua thaum koj luag.",
      },
      {
        title: "Pab kaw qhov khoob me",
        description:
          "Yog tus mob haum, veneer yuav pab kom qhov khoob me thiab qhov tsis sib xws pom tsawg dua.",
      },
      {
        title: "Ua kom luag zoo li ntuj tsim",
        description:
          "Xim, qhov ci thiab duab yuav xaiv kom haum koj lub ntsej muag thiab cov hniav ntuj nyob ib ncig.",
      },
    ],
    candidates: [
      "Cov neeg laus uas xav kho cov hniav pom thaum luag kom zoo dua.",
      "Cov neeg uas hniav thiab pos hniav noj qab nyob zoo txaus rau kev kho.",
      "Cov neeg uas muaj xim hniav, qhov khoob me lossis duab hniav tsis sib npaug.",
      "Cov neeg uas nkag siab tias qhov tshwm sim nyob ntawm lawv tus mob.",
    ],
    steps: [
      {
        title: "Sib tham thiab saib lub luag ntxhi",
        description:
          "Kws kho hniav tshuaj xyuas hniav, pos hniav, kev tom hniav thiab yam uas koj xav hloov.",
      },
      {
        title: "Npaj lub luag ntxhi rau koj",
        description:
          "Npaj duab, qhov loj, xim thiab tus naj npawb veneer kom haum koj lub ntsej muag.",
      },
      {
        title: "Npaj cov hniav",
        description:
          "Thaum tsim nyog, kws kho hniav yuav txo ib feem hniav me me raws li txoj kev kho.",
      },
      {
        title: "Luam hniav lossis scan digital",
        description:
          "Sau ntaub ntawv kom raug kom lub chaw ua hniav tsim veneer raws li tau npaj.",
      },
      {
        title: "Sim, kho thiab lo veneer",
        description:
          "Kuaj qhov haum, xim, kev zoo nkauj thiab kev tom ua ntej lo veneer ruaj.",
      },
    ],
    materials: [
      {
        title: "Veneer ceramic",
        description:
          "Ceramic yuav muab qhov ci thiab xim zoo li hniav ntuj thaum tus mob haum.",
      },
      {
        title: "Xaiv xim thiab duab rau ib tug zuj zus",
        description:
          "Xaiv xim, qhov ci thiab duab kom haum tawv nqaij, ntsej muag thiab cov hniav ntuj.",
      },
    ],
    faq: [
      {
        question: "Veneer puas haum rau txhua tus?",
        answer:
          "Tsis haum rau txhua tus. Yog hniav lossis pos hniav muaj mob, hniav tsis muaj zog txaus, lossis kev tom hniav muaj teeb meem loj, yuav tsum kho lwm yam ua ntej lossis xaiv lwm txoj kev.",
      },
      {
        question: "Kuv yuav tsum ua veneer pes tsawg tus hniav?",
        answer:
          "Tus naj npawb nyob ntawm cov hniav uas pom thaum koj luag, yam uas koj xav hloov thiab qhov sib npaug ntawm lub luag ntxhi.",
      },
      {
        question: "Yuav saib xyuas veneer li cas?",
        answer:
          "Ntxuav hniav txhua hnub, rov mus tshuaj xyuas raws sijhawm thiab zam kev tom yam tawv lossis cwj pwm uas nias veneer heev.",
      },
    ],
    seoDescription:
      "Kawm txog veneer hauv Nyab Laj, kev npaj lub luag ntxhi rau koj thiab kev pab cov neeg tuaj txawv teb chaws.",
  }),
  crowns: createHmnTreatment({
    title: "Hniav Looj Ceramic",
    summary:
      "Ib txoj kev kho los tiv thaiv tus hniav uas tsis muaj zog, pab rov tom tau thiab kho qhov pom ntawm tus hniav.",
    badge: "HNIAV LOOJ HAUV NYAB LAJ",
    heroTitle:
      "Kho tus hniav puas lossis tsis muaj zog nrog hniav looj uas haum koj txoj kev tom thiab lub luag ntxhi.",
    heroDescription:
      "Hniav looj yuav pab tiv thaiv tus hniav tsis muaj zog, rov qab kev tom zaub mov thiab kho duab lossis xim ntawm tus hniav. Yuav tsum tshuaj xyuas ua ntej npaj txoj kev kho.",
    overview: [
      "Hniav looj yog ib daim hniav tsim tshwj xeeb los npog thiab tiv thaiv tus hniav uas puas, tawg, txhaws loj lossis twb kho cag hniav lawm.",
      "Hniav looj kuj siv tau rau saum hniav cog. Kws kho hniav yuav saib hniav, pos hniav, kev tom thiab feem hniav uas tseem tshuav ua ntej kho.",
    ],
    benefits: [
      {
        title: "Tiv thaiv tus hniav tsis muaj zog",
        description:
          "Hniav looj yuav pab txhawb tus hniav uas puas, tawg lossis tsis muaj zog vim txhaws loj.",
      },
      {
        title: "Rov qab kev tom zaub mov",
        description:
          "Hniav looj tsim kom rov tau duab thiab kev siv uas xav tau rau lub neej txhua hnub.",
      },
      {
        title: "Kho qhov pom ntawm tus hniav",
        description:
          "Thaum haum, hniav looj yuav pab kho xim, ntug thiab qhov loj ntawm tus hniav.",
      },
      {
        title: "Siv ua hniav kawg saum hniav cog",
        description:
          "Hniav looj yuav ua tus hniav uas pom nyob saum tus hniav cog.",
      },
    ],
    candidates: [
      "Cov neeg uas hniav tawg, hnav lossis tsis muaj zog heev.",
      "Cov neeg uas tus hniav muaj qhov txhaws loj lossis poob ib feem ntau.",
      "Cov neeg uas yuav tsum kho tus hniav tom qab kho cag hniav.",
      "Cov neeg uas xav tau hniav looj saum tus hniav cog.",
    ],
    steps: [
      {
        title: "Tshuaj xyuas tus hniav",
        description:
          "Kws kho hniav saib tus hniav, pos hniav, kev tom thiab cov duab kuaj uas tsim nyog.",
      },
      {
        title: "Npaj txoj kev kho",
        description:
          "Xyuas tias hniav looj puas haum thiab tham txog khoom siv, xim, duab thiab sijhawm.",
      },
      {
        title: "Npaj tus hniav",
        description:
          "Kho tus hniav raws li txoj kev kho kom hniav looj zaum tau ruaj thiab haum.",
      },
      {
        title: "Luam hniav lossis scan digital",
        description:
          "Sau ntaub ntawv kom lub chaw ua hniav tsim hniav looj rau koj.",
      },
      {
        title: "Sim thiab lo hniav looj",
        description:
          "Kuaj qhov haum, xim, qhov kov thiab kev tom ua ntej lo ruaj.",
      },
    ],
    materials: [
      {
        title: "Ceramic thiab zirconia",
        description:
          "Ceramic thiab zirconia yuav muab kev ruaj, xim kav ntev thiab qhov pom zoo li hniav ntuj thaum haum.",
      },
      {
        title: "Tsim kom haum kev tom",
        description:
          "Hniav looj tsim kom rov tau duab, qhov kov thiab kev tom uas xis siv txhua hnub.",
      },
    ],
    faq: [
      {
        question: "Thaum twg thiaj yuav tsum ua hniav looj?",
        answer:
          "Kws kho hniav yuav qhia hniav looj thaum tus hniav tawg, txhaws loj, tsis muaj zog, kho cag hniav lawm lossis xav tau hniav kawg saum hniav cog.",
      },
      {
        question: "Ua hniav looj siv sijhawm ntev npaum li cas?",
        answer:
          "Lub sijhawm nyob ntawm tus hniav, lub chaw ua hniav, hom khoom siv thiab seb puas yuav tsum kho lwm yam ntxiv.",
      },
      {
        question: "Hniav looj puas yuav zoo li hniav ntuj?",
        answer:
          "Yuav npaj raws li duab, xim, cov hniav nyob ib ncig thiab kev siv. Qhov tshwm sim nyob ntawm koj tus mob thiab hom khoom siv.",
      },
    ],
    seoDescription:
      "Kawm txog hniav looj ceramic hauv Nyab Laj nrog kev npaj kho raws li koj tus hniav thiab kev tom.",
  }),
  smileMakeover: createHmnTreatment({
    title: "Kho Tag Nrho Lub Luag Ntxhi",
    summary:
      "Ib txoj kev kho lub luag ntxhi uas yuav muab ntau hom kev kho hniav los sib txuas raws li yam koj xav tau.",
    badge: "KHO LUB LUAG NTXHI HAUV NYAB LAJ",
    heroTitle:
      "Hloov koj lub luag ntxhi nrog txoj kev kho uas tsim rau koj ib leeg.",
    heroDescription:
      "Kev kho tag nrho lub luag ntxhi yuav npaj raws li koj lub ntsej muag, kev noj qab haus huv ntawm lub qhov ncauj, kev tom hniav thiab yam uas koj xav tau mus ntev. Tej zaum yuav muab ntau hom kev kho los sib txuas tom qab tshuaj xyuas tag.",
    overview: [
      "Kev kho tag nrho lub luag ntxhi tsis yog ib hom txheej txheem xwb. Nws yog txoj kev kho uas yuav muab kev kho kom zoo nkauj, kho hniav puas thiab kho kev siv los sib txuas.",
      "Nyob ntawm koj tus mob, txoj kev kho yuav muaj veneer, hniav looj, hniav cog, ntxuav hniav dawb, kho pos hniav lossis kho kev tom.",
      "Tsis yog txhua tus yuav tsum ua txhua yam. Kws kho hniav tsuas qhia tom qab tshuaj xyuas hniav, pos hniav, kev tom thiab yam uas koj xav tau.",
    ],
    benefits: [
      {
        title: "Ua kom lub luag ntxhi sib npaug",
        description:
          "Npaj qhov loj, duab, qhov chaw thiab qhov sib raug ntawm cov hniav kom lub luag ntxhi sib haum dua.",
      },
      {
        title: "Saib lub ntsej muag thiab lub luag ntxhi ua ke",
        description:
          "Kev npaj yuav saib koj lub ntsej muag, daim di ncauj thiab qhov zoo li ntuj tsim, tsis yog saib hniav xwb.",
      },
      {
        title: "Kho kev zoo nkauj thiab kev siv ua ke",
        description:
          "Thaum tsim nyog, txoj kev kho yuav saib ob qho: qhov pom thiab teeb meem xws li hniav puas lossis hniav ploj.",
      },
      {
        title: "Npaj ntau hom kev kho kom sib txuas",
        description:
          "Ib txoj kev npaj meej yuav pab teeb theem thiab sijhawm kom txhua hom kev kho ua haujlwm ua ke.",
      },
    ],
    candidates: [
      "Cov neeg laus uas muaj ntau yam teeb meem txog hniav lossis lub luag ntxhi.",
      "Cov neeg uas txhawj txog xim, duab, qhov khoob, kev hnav lossis qhov loj ntawm hniav.",
      "Cov neeg uas muaj hniav puas, hniav ploj lossis hniav kho ntau lawm.",
      "Cov neeg uas xav tau ib txoj kev kho tag nrho es tsis yog kho ib qho xwb.",
    ],
    steps: [
      {
        title: "Thawj zaug sib tham",
        description:
          "Qhia koj cov teeb meem, yam uas koj xav hloov, ntaub ntawv uas muaj thiab sijhawm tuaj Nyab Laj.",
      },
      {
        title: "Tshuaj xyuas lub qhov ncauj",
        description:
          "Kws kho hniav saib hniav, pos hniav, kev tom thiab cov duab kuaj uas tsim nyog.",
      },
      {
        title: "Tshuaj xyuas lub luag ntxhi thiab ntsej muag",
        description:
          "Saib qhov loj ntawm hniav, kab luag, ntsej muag thiab kev siv ua ib feem ntawm kev npaj.",
      },
      {
        title: "Npaj txoj kev kho rau koj",
        description:
          "Tham txog hom kev kho, khoom siv, theem kho thiab sijhawm raws li koj tus mob.",
      },
      {
        title: "Kho thiab tshuaj xyuas zaum kawg",
        description:
          "Ua cov kev kho raws theem, ces kuaj qhov pom, kev tom, kev xis thiab kev siv ua ntej xaus.",
      },
    ],
    materials: [
      {
        title: "Khoom siv xaiv raws li ib hom kev kho",
        description:
          "Ceramic, zirconia, hniav cog lossis lwm yam khoom yuav xaiv raws li qhov chaw, kev tom thiab lub hom phiaj.",
      },
      {
        title: "Npaj xim thiab duab rau koj",
        description:
          "Npaj xim, qhov ci, ntug thiab qhov loj kom haum koj lub ntsej muag thiab cov hniav ntuj.",
      },
      {
        title: "Xav txog kev saib xyuas mus ntev",
        description:
          "Kev xaiv khoom siv kuj saib kev tu hniav, zog tom, kev ua neej thiab kev saib xyuas tom qab.",
      },
    ],
    faq: [
      {
        question: "Kev kho tag nrho lub luag ntxhi muaj dab tsi?",
        answer:
          "Tej zaum yuav muaj veneer, hniav looj, hniav cog, ntxuav hniav dawb, kho pos hniav lossis lwm yam. Qhov tiag nyob ntawm kev tshuaj xyuas.",
      },
      {
        question: "Puas yog txhua tus yuav ua tib hom kev kho?",
        answer:
          "Tsis yog. Txhua tus txoj kev kho txawv. Qee tus tsuas xav tau ob peb yam, hos lwm tus yuav tsum muaj txoj kev kho dav dua.",
      },
      {
        question: "Kev kho siv sijhawm ntev npaum li cas?",
        answer:
          "Lub sijhawm nyob ntawm hom thiab tus naj npawb kev kho. Qee txoj kev kho tas hauv ib zaug tuaj, hos lwm txoj yuav tsum faib ua ntau theem lossis tuaj dua.",
      },
    ],
    seoDescription:
      "Kawm txog kev kho tag nrho lub luag ntxhi hauv Nyab Laj nrog txoj kev kho thiab kev npaj kev tuaj uas tsim rau koj.",
  }),
} satisfies TreatmentTranslations;
