.
<template>
  <div class="dash">
    <div class="navbar">
      <ul>
        <li class="navbarnav">
          <router-link :to="{ path: '/' }" class="thing" replace>
            ←Back</router-link
          >
          <div class="searchbox">
            <input
              :key="$route.fullPath"
              type="text"
              class="search-bar1"
              :placeholder="'$' + ticker"
              @keyup.enter="the_go(message.toUpperCase())"
              v-model="message"
            />
          </div>

          <div class="buttondiv">
            <div class="a" style="color: white"></div>
            <button
              :key="$route.fullPath"
              class="gobutton"
              @click="the_go(message.toUpperCase())"
            >
              GO
            </button>
          </div>
          <div class="rectangle"></div>
          <h5
            v-if="user == null"
            style="color: green; text-transform: capitalize"
          >
            login/signup for free to get acess
          </h5>
          <h5 v-else style="color: green; text-transform: capitalize"></h5>

          <router-link
            :to="{ path: '/dashboard/' + ticker }"
            class="thing"
            replace
            >Dashboard</router-link
          >
          <router-link :to="{ path: '/industry/' + ticker }" class="thing" replace
            >Industry</router-link
          >
          <router-link :to="{ path: '/macro/' + ticker }" class="thing" replace
            >Macro view</router-link
          >
          <h4 class="current">Funds</h4>
          <h6 class="thing">News( coming soon)</h6>
          <!-- <h7 class="thing">Macroview( coming soon)</h7> -->

          <h1 v-if="user == null">
            <b-button
              @click="googlesigin"
              class="btn btn-success"
              style="color: black"
              >Login/signinup</b-button
            >
          </h1>

          <h1>
            <a style="color: #0f0f0f">,</a>
            <div class="fg" style="display: flex; flex-direction: column">
              <b-button
                @click="openstripe()"
                class="btn btn-success"
                style="color: black; background-color: #38ea41"
                >GO pro <i class="fas fa-crown"></i
              ></b-button>
              <b-button
                @click="logout"
                class="btn btn-success"
                style="color: gray; background-color: #0f0f0f; border: none"
                >logout</b-button
              >
            </div>
          </h1>
          <div class="footernotes" style="display: flex">
            <a
              style="color: white"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krish@greenlines.club"
              target="_blank"
              >📧contact</a
            >
            <a
              style="color: white"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krish@greenlines.club"
              target="_blank"
              >🐞Report a bug</a
            >
          </div>
        </li>
      </ul>
    </div>

    <div class="fundsview">
      <h1 style="color: white; margin:1rem;">Q4 HedgeFund Letters & Reports</h1>
      <ul id="funds_grid">
        <li
          v-for="item in items1"
          :key="item.message"
          style="color: aliceblue; list-style: none; column-count: 2;"
        >
         
             <div class="fdsfd">
               <div class="divfsd" style=" border: 1px solid rgba(0, 97, 48, 0.233);">
                <h5 class="card-title" style="margin-top: 10px; text-align: center;">{{ item.fund }}</h5>
              <div
                @click="open_links(item.link)"
                class="view_btn"
                
                >View</div
              >
             </div>
             </div>
           
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import names from "./data.js";
import { db } from "../firebase";

export default {
  props: ["ticker"],
  firestore() {
    return {
      ispro: db.doc(`${this.user.email}`).onSnapshot((doc) => {
        this.ispro = doc.data().pro;
      }),
      map1: db.doc("industry/data_new").onSnapshot((doc) => {
        this.map1 = doc.data().roic;
      }),
      name: db.doc("users/bob").onSnapshot((doc) => {
        this.name = doc.data();
      }),
    };
  },
  data() {
    return {
      items1: [
        {fund:'Aikya Emerging Markets', link:'http://aikya.co.uk/safaricom-evaluating-downside-risks/'},
{fund:'Akre Focus Fund', link:'https://www.akrefund.com/wp-content/uploads/2022/01/Akre-Focus-Fund-Quarterly-Commentary-2021-Q4.pdf'},
{fund:'Alluvial Capital', link:'https://alluvialcapital.com/wp-content/uploads/2022/01/Alluvial-Capital-Management-Q4-2021-Letter-to-Partners.pdf'},
{fund:'Alphyn Capital', link:'http://www.alphyncap.com/uploads/1/4/1/2/14123551/acml_2021-q4.pdf'},
{fund:'Alta Fox - Hasbro Presentation', link:'https://freethewizards.com/wp-content/uploads/2022/02/Alta-Fox-HAS-Presentation-Final.pdf'},
{fund:'Arch Capital', link:'https://www.archcapitalfund.com/_files/ugd/d7eae5_05e73048c3af46bfa6ed0f81e0f43a29.pdf'},
{fund:'Arch Capital - Sprouts Farmers Markets', link:'https://www.archcapitalfund.com/_files/ugd/abb1a0_d5750b40a6154392bf0834b92aa398e0.pdf'},
{fund:'Arquitos Capital', link:'https://mcusercontent.com/2511717cdf1bae9a0638c942a/files/bc51c129-660c-7697-093e-99e6d7e60b50/Arquitos_Investor_Letter_Q4_2021.pdf'},
{fund:'Baupost', link:'https://drive.google.com/file/d/19vmhW2v_DTGrlb6dYTNjSw0bEr3-C6xZ/view'},
{fund:'Bill Nygren', link:'https://oakmark.com/news-insights/bill-nygren-market-commentary-4q21/'},
{fund:'Blackwell Capital - Peloton', link:'https://www.blackwellscap.com/wp-content/uploads/2022/02/BW_Peloton_Presentation_Feb072022.pdf'},
{fund:'Bonitas Research - Short Report on MP Materials', link:'https://www.bonitasresearch.com/wp-content/uploads/dlm_uploads/2022/02/BonitasResearch-Short-MPMaterials-NYSE-MP-Feb-3-2022.pdf'},
{fund:'Boyar Value', link:'https://www.boyarvaluegroup.com/wp-content/uploads/2022/01/4Q_2021_BVG_Website.pdf'},
{fund:'Bronte Capital', link:'http://files.brontecapital.com/amalthea/Amalthea_Letter_202112.pdf'},
{fund:'Broyhill', link:'https://www.broyhillasset.com/wp-content/uploads/2022/02/The-Broyhill-Letter-2021.Q4.pdf'},
{fund:'Bumbershoot Holdings', link:'https://bumbershootholdingsdotcom.files.wordpress.com/2022/02/bumbershoot-holdings-e28094-2022-2-feb-e28094-letter-to-partners-e28094-2021.pdf'},
{fund:'Claret Asset Management', link:'https://www.claret.ca/publications/quarterly-letter-q4-2021/?utm_source=QL&utm_medium=reddit&utm_campaign=QL4-2021-CK-Reddit'},
{fund:'Clark Street Value', link:'http://clarkstreetvalue.blogspot.com/2021/12/year-end-2021-portfolio-review.html'},
{fund:'Curreen Capital', link:'https://static1.squarespace.com/static/55f99b0ae4b02c9607c0f701/t/61df939be19b8f24cc253228/1642042267535/Q4+2021+Letter.pdf'},
{fund:'Desert Lion', link:'https://mcusercontent.com/2b965ce88104d672785279e80/files/cc219f00-a95d-8086-ca58-42e4adc36d69/2021_Q4_Investor_Letter_Desert_Lion_Capital.pdf'},
{fund:'Donville Kent', link:'https://donvillekent.com/wp-content/uploads/2022/02/DKAM-ROE-Reporter-January-2022.pdf'},
{fund:'East72', link:'https://www.nsx.com.au/ftp/news/021740409.PDF'},
{fund:'Ensemble Capital', link:'https://ensemblecapital.com/wp-content/uploads/2022/01/ECM-Quarterly-Letter-4Q21.pdf'},
{fund:'Euclidean Technologies', link:'https://www.euclidean.com/euclidean-technologies-the-decade-ahead'},
{fund:'Ewing Morris', link:'https://ewingmorris.s3.amazonaws.com/wp-content/uploads/2022/02/14162354/Equity-Strategies-Feburary-2022-Update_Transcript-Final.pdf'},
{fund:'FPA Crescent Fund', link:'https://fpa.com/docs/default-source/funds/fpa-crescent-fund/literature/quarterly-commentaries/fpa-crescent-fund-commentary-2021-q4.pdf?'},
{fund:'Farnam Street Investments', link:'https://orphanira.com/wp-content/uploads/2022/01/January-2022-Client-Letter1.pdf'},
{fund:'Fundsmith', link:'https://www.fundsmith.co.uk/media/3wcngjie/2021-fef-annual-letter-to-shareholders-web.pdf'},
{fund:'Fundsmith - Unilever + GSK', link:'https://www.fundsmith.co.uk/media/iljh250j/fundsmith_unilever_and_gsk.pdf'},
{fund:'GMO', link:'https://www.gmo.com/globalassets/articles/quarterly-letter/2021/gmo-quarterly-letter_4q-2021.pdf'},
{fund:'Giverny Capital', link:'https://static1.squarespace.com/static/5e8f1f2a9432801293f6439e/t/61eb18135e28e93a1b989a12/1642797076632/GCAM+2021+Q4+letter+.pdf'},
{fund:'Greenhaven Road', link:'https://static1.squarespace.com/static/5498841ce4b0311b8ddc012b/t/61f4601ca0cc3227736bf76f/1643405340863/Greenhaven+Road+%282021+Q4%29+Quarterly+Letter.pdf'},
{fund:'Greenlight Capital', link:'https://drive.google.com/file/d/1Nb2a7A-4S588IJtN5UVTb2Q_urhCnaNX/view'},
{fund:'Greystone', link:'https://www.greystonevalue.com/wp-content/uploads/2022/02/Greystone-Capital-Q4-2021-Letter.pdf'},
{fund:'Hayden Capital', link:'http://www.haydencapital.com/wp-content/uploads/Hayden-Capital-Quarterly-Letter-2021-Q4.pdf'},
{fund:'Hirschmann Capital', link:'https://www.hcapital.llc/_files/ugd/dc7287_9e200272b77545029677e91f064b8681.pdf'},
{fund:'Horizon Kinetics', link:'https://horizonkinetics.com/app/uploads/Q4-2021-Quarterly-Review_FINAL.pdf'},
{fund:'Howard Marks Memo', link:'https://www.oaktreecapital.com/docs/default-source/memos/selling-out.pdf?sfvrsn=5a4f7166_11'},
{fund:'Laughing Water Capital', link:'https://static1.squarespace.com/static/5d93ed0b59166652b0d66427/t/62050baea91a235dd67c8baa/1644497838872/Laughing+Water+Capital+YE+2021.pdf'},
{fund:'Longleaf Small Cap', link:'https://southeasternasset.com/commentary/longleaf-partners-small-cap-fund-consolidated-commentary-4q1995-to-present/'},
{fund:'MPE Capital', link:'https://drive.google.com/file/d/1NjbvXcjfNGinPg7Y3YySMQde4oN8gHjd/view'},
{fund:'Maran Partners', link:'https://mcusercontent.com/4522df4fcbfa5be002117f260/files/c02d7d47-40d4-8e32-4048-482545d8fb5e/Maran_Partners_Fund_LP_2021_4Q_Letter.pdf'},
{fund:'Massif Capital', link:'https://info.massifcap.com/fourth-quarter-2021-letter-to-investors-full'},
{fund:'Messari', link:'https://messari.io/pdf/messari-report-crypto-theses-for-2022.pdf'},
{fund:'Miller Value - Deep Value', link:'https://millervalue.com/deep-value-strategy-4q21-letter/'},
{fund:'Miller Value - Income', link:'https://millervalue.com/income-strategy-4q21-letter/'},
{fund:'Miller Value - Opportunity', link:'https://millervalue.com/opportunity-equity-4q21-letter/'},
{fund:'Mittleman Brothers', link:'https://brookvine.com.au/wp-content/uploads/2021Q4_Mittleman-Global-Value-Equity-Fund_Quarterly-Report_Class-P.pdf'},
{fund:'Newfound Research', link:'https://www.thinknewfoundfunds.com/wp-content/uploads/2022/01/2021-Q4-Commentary.pdf'},
{fund:'O`Keefe', link:'https://okeefestevens.com/wp-content/uploads/2022/01/Q4-2021-Letter.pdf'},
{fund:'Overseas - Asia Recovery Fund', link:'https://oam.com.ky/documents/2022-01-17-Chairman-s-Statement--OAM-Asian-Recovery-Fund.pdf'},
{fund:'Packer & Co', link:'https://www.packerco.com/media/newsletters/PackerCo_December2021.pdf'},
{fund:'Palm Capital', link:'https://palmcapital.co.za/wp-content/uploads/2022/02/2021Q4-Commentary.pdf'},
{fund:'Palm Valley Capital', link:'https://9d818c09-f111-477c-94f9-713af784f4df.filesusr.com/ugd/ef2f99_66728216a304405b84fd411d2f30a550.pdf'},
{fund:'Pershing Square - Netflix', link:'https://assets.pershingsquareholdings.com/2022/01/26170421/Pershing-Square-Capital-Management-L.P.-Releases-Letter-to-Investors-01-26-2022.pdf'},
{fund:'Pershing Square Annual Presentation', link:'https://assets.pershingsquareholdings.com/2022/02/11120213/Pershing-Square-Holdings-2022-Annual-Investor-Presentation.pdf'},
{fund:'Prescience Point - Groupon Update', link:'https://www.presciencepoint.com/wp-content/uploads/2022/01/GRPN_UpdateReport_1_FINAL.pdf'},
{fund:'Pzena', link:'https://www.pzena.com/wp-content/uploads/2022/01/PzenaNewsletter-Commentary-4Q21.pdf'},
{fund:'REQ Capital', link:'https://issuu.com/reqcapital/docs/investor_letter_2021_web'},
{fund:'Rowan Street', link:'https://www.rowanstreet.com/post/rowan-street-2021-year-end-letter'},
{fund:'Ruffer', link:'https://www.ruffer.co.uk/en/thinking/articles/investment-review/2021-q4-investment-review'},
{fund:'SRK Capital', link:'https://srk-capital.com/content_files/2022/02/SRK-Fund-H2-2021-Letter.pdf'},
{fund:'Safehouse Capital - Crocs', link:'https://www.safehousecap.com/_files/ugd/9edfa4_bfcba4467d4c46598cc59c84d99782b2.pdf'},
{fund:'Saga Partners', link:'https://www.sagapartners.com/post/investor-letter-h2-2021'},
{fund:'Salt Light Capital', link:'https://saltlight-website-files.s3.eu-west-1.amazonaws.com/documents/SaltLight_Letter_4Q21.pdf'},
{fund:'Silver Ring Partners', link:'https://mcusercontent.com/57cdfc490b101d54b70128c06/files/a62ee203-321d-dd57-54e9-1e5e7d4bf918/SilverRingValuePartners_2021Q4_Letter.pdf'},
{fund:'Steele City', link:'https://mcusercontent.com/5a9b922c73b7d108f230f1403/files/caafeb57-9e30-8af0-e660-6464ae971825/Steel_City_Capital_4Q_21_Partner_Letter.01.pdf'},
{fund:'Stewart Asset Management', link:'https://stewartassetmgmt.com/quarterly-report/'},
{fund:'TGV Partners Fund', link:'https://valueandopportunity.files.wordpress.com/2022/01/bericht-des-sub-advisors-fuer-das-teilgesellschaftsvermoegen-partners-fund-ueber-das-jahr-2021-englisch.pdf'},
{fund:'TGV Rubicon Fund', link:'https://valueandopportunity.files.wordpress.com/2022/01/letter_2021_15855.pdf'},
{fund:'TGV Truffle Fund', link:'https://valueandopportunity.files.wordpress.com/2022/01/bericht-des-sub-advisors-fuer-das-teilgesellschaftsvermoegen-truffle-ueber-das-jahr-2021-englisch.pdf'},
{fund:'The Block', link:'https://www.tbstat.com/wp/uploads/2021/12/The-Block-Research-2022-Digital-Asset-Outlook.v2.pdf'},
{fund:'Third Avenue Value Fund', link:'https://thirdave.com/wp-content/uploads/shareholder-letters/TAVFX-Shareholder-Letter.pdf'},
{fund:'Third Point Capital', link:'https://thirdpointlimited.com/wp-content/uploads/2022/02/Third-Point-Q4-2021-Investor-Letter-TPIL.pdf'},
{fund:'Tidefall', link:'https://tidefall.substack.com/p/q4-2021-letter'},
{fund:'Tollymore Partners', link:'https://mcusercontent.com/020149e8628527512acbfb43b/files/031c3cdc-d04b-09f3-5081-900e3c1555bd/Tollymore_letters_to_partners_Dec_2021.pdf'},
{fund:'VGI Partners', link:'https://www.vgipartners.com/wp-content/uploads/2022/01/VG1-2022-01-28_Investor-Letter-from-the-Manager.pdf'},
{fund:'Vltava Fund', link:'https://www.vltavafund.com/dopisy-akcionarum/2021'},
{fund:'Wedgewood Partners', link:'https://66586259-e635-40d5-bf11-9d22ba98eca0.filesusr.com/ugd/d2a1d2_ff750f7afc8b4601a14ea1571b376bfc.pdf'},
{fund:'Weitz', link:'https://weitzinvestments.com/sitefiles/live/documents/ValueMatters/4Q21_Value_Matters_FINAL.pdf'},
{fund:'Whitebrook Capital', link:'https://www.whitebrookcapital.com/4q2021-commentary'},
{fund:'Worm Capital', link:'https://www.wormcapital.com/the-wormhole-source/q4-2021'},

      ],
      fundnames: ["oaktree", "bob", "katkat"],
      ispro: [],
      user: null,
      error: null,
      awesome: "ds",
      selected: "0",
      map1: [],

      items: names,
      // loading: firebase.auth.currentuser
    };
  },

  methods: {
    open_links: function (link) {
      console.log(link);

      window.open(`${link}`, "_blank");
    },

    openstripe: function () {
      window.open("https://greenliness.gumroad.com/l/qxwozl", "_blank");
      // window.open("https://buy.stripe.com/aEUfZkel41YJ6FW5kk");
      this.$gtag.event("clicked on pro", { method: "Google" });
    },

    return_items: function (sel, name) {
      console.log(sel);
      return this.items[sel][name];
    },
    return_items1: function (sel, name, map) {
      console.log(sel);
      return map[sel][name];
    },

    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // alert("logout");
        })
        .catch((error) => {
          this.error = error;
        });
    },
    the_go: function (ticker) {
      this.$router.push({
        path: "/dashboard/" + ticker,
      });
      this.$forceUpdate();
      // location.reload();
      // this.$router.go(this.$router.currentRoute);
    },

    googlesigin: function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          // alert("signin");
          // this.$router.push({
          //   path: "results/" + this.user.uid,
          // });
        })
        .catch((err) => {
          console.log(err);
        });
      // This gives you a Google Access Token. You can use it to access the Google API.
    },
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
};
</script>

<style>
@import url("../style/dashboard.css");
</style>
