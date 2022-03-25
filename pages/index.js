import Category from '../components/Category.js';
import RoleSelector from '../components/RoleSelector.js';

export default function Home({ roles, categories, cards }) {
  return (
    <>
      <RoleSelector roles={roles}/>
      <Category title="Featured" cards={cards} />
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      {/* <div class="flex flex-wrap w-full "> */}
      {/* <div class="grid gap-4 grid-flow-col auto-cols-max w-full"> */}
      {/* <div class="flex flex-wrap gap-4 overflow-hidden"> */}
      {/* {console.log(tiles)} */}
    </>
  )
}


// Data
export async function getStaticProps() {
  return {
    props: {
      roles: [
        {
          key: "STU",
          title: "Student",
          order: 1
        },
        {
          key: "TCH",
          title: "Teacher",
          order: 2
        },
        {
          key: "PAR",
          title: "Parent / Guardian",
          order: 3
        },
        {
          key: "STF",
          title: "Classified Staff",
          order: 4
        },
        {
          key: "SUB",
          title: "Substitute Teacher",
          order: 5
        },
        {
          key: "ALL",
          title: "View all Applications",
          order: 6
        },

      ],

      categories: {
        "1": "Featured",
        "2": "Productivity",
        "3": "ECR Apps",
        "4": "Instruction"
      },
      cards: [
        {
          "Title": "Canvas",
          "icon": "https://play-lh.googleusercontent.com/2_M-EEPXb2xTMQSTZpSUefHR3TjgOCsawM3pjVG47jI-BrHoXGhKBpdEHeLElT95060B=s0-rw",
          "categories": ["1", "4"],
          "priority": "yes",
          "roles": {
            "STU": {
              "Description": "Canvas for Students, Teachers, and Substitutes - view daily agendas, complete assignments, and take assessments",
              "URL": "https://ecrchs.instructure.com/login/saml"
            },
            "TCH": {
              "Description": "Canvas for Students, Teachers, and Substitutes - view daily agendas, complete assignments, and take assessments",
              "URL": "https://ecrchs.instructure.com/login/saml"
            },
            "STF": {
              "Description": "Canvas for Students, Teachers, and Substitutes - view daily agendas, complete assignments, and take assessments",
              "URL": "https://ecrchs.instructure.com/login/saml"
            },
            "SUB": {
              "Description": "Canvas for Students, Teachers, and Substitutes - view daily agendas, complete assignments, and take assessments",
              "URL": "https://ecrchs.instructure.com/login/saml"
            }
          }
        },
        {
          "Title": "Aeries",
          "icon": "https://play-lh.googleusercontent.com/2_M-EEPXb2xTMQSTZpSUefHR3TjgOCsawM3pjVG47jI-BrHoXGhKBpdEHeLElT95060B=s0-rw",
          "categories": ["1", "4"],
          "priority": "yes",
          "roles": {
            "STU": {
              "Description": "Aeries for stude - view daily agendas, complete assignments, and take assessments",
              "URL": "https://ecrchs.instructure.com/login/saml"
            },
            "TCH": {
              "Description": "Canvas for Students, Teachers, and Substitutes - view daily agendas, complete assignments, and take assessments",
              "URL": "https://ecrchs.instructure.com/login/saml"
            },
            "STF": {
              "Description": "Canvas for Students, Teachers, and Substitutes - view daily agendas, complete assignments, and take assessments",
              "URL": "https://ecrchs.instructure.com/login/saml"
            },
            "SUB": {
              "Description": "Canvas for Students, Teachers, and Substitutes - view daily agendas, complete assignments, and take assessments",
              "URL": "https://ecrchs.instructure.com/login/saml"
            }
          }
        },
      ]
    }
  }
}