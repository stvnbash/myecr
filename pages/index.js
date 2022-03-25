import Category from '../components/Category.js';
import CategorySelector from '../components/CategorySelector.js';
import RoleSelector from '../components/RoleSelector.js';

export default function Home({ roles, categories, cards }) {
  return (
    <>
      {/* <RoleSelector roles={roles}/> */}
      <CategorySelector categories={categories} cards={cards}/>
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
          id: 1,
          oid: "STU",
          title: "Student"
        },
        {
          id: 2,
          oid: "TCH",
          title: "Teacher"
        },
        {
          id: 3,
          oid: "PAR",
          title: "Parent / Guardian"
        },
        {
          id: 4,
          oid: "STF",
          title: "Classified Staff"
        },
        {
          id: 5,
          oid: "SUB",
          title: "Substitute Teacher"
        }

      ],

      categories: [
        {
          id: 1,
          oid: "FEA",
          title: "Featured",
        },
        {
          id: 2,
          oid: "PRO",
          title: "Productivity",
        },
        {
          id: 3,
          oid: "ECR",
          title: "ECR Apps",
        },
        {
          id: 4,
          oid: "INS",
          title: "Instruction",
        }
      ],

      cards: [
        {
          title: "Canvas",
          url: "#",
          icon: "https://play-lh.googleusercontent.com/2_M-EEPXb2xTMQSTZpSUefHR3TjgOCsawM3pjVG47jI-BrHoXGhKBpdEHeLElT95060B=s0-rw",
          category: ["FEA", "INS"],
          priority: true,
          roles: {
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
          title: "Aeries",
          url: "#",
          icon: "https://play-lh.googleusercontent.com/6J47oNiSNizXA610JPz9SCcG8ej9wBJXELZlJOF0uhA5CzdTY0rP_bbPf4rwEAP7Ido=s0-rw",
          category: ["FEA", "INS"],
          priority: true,
          roles: {
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
          title: "ECR Email",
          url: "#",
          icon: "https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=s0-rw",
          category: ["FEA", "PRO"],
          priority: true,
          roles: {
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
          title: "OneDrive",
          url: "#",
          icon: "https://play-lh.googleusercontent.com/6AWr-qrhGT0ohjw0koq3bM8GHEFg1gTurald4FjCDg2RulTp4y_VVsYWUtw7Fo6lsQo=s0-rw",
          category: ["PRO"],
          priority: true,
          roles: {
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
          title: "Microsoft Office Portal",
          url: "#",
          icon: "https://play-lh.googleusercontent.com/D6XDCje7pB0nNP1sOZkwD-tXkV0_As3ni21us5yZ71_sy0FTWv1s_MQBe1JUnHlgE94=s0-rw",
          category: ["PRO"],
          priority: true,
          roles: {
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
          title: "Paycom",
          url: "#",
          icon: "https://play-lh.googleusercontent.com/JGhdoNAdO_gYOyPImRbn7CxdeY4a71ZtnhNvTZGsRyYTObPzCXXIOKpSOaQFraU6XUt-=s0-rw",
          category: ["FEA", "ECR"],
          priority: true,
          roles: {
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
          title: "Adobe",
          url: "#",
          icon: "https://play-lh.googleusercontent.com/WIVfY42FSk4naFCn42h694luehyzsifuiy2l0ok_-lFeb50qda_7j3YQdp0x2-S2_ykH=s0-rw",
          category: ["PRO"],
          priority: true,
          roles: {
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
          "category": ["1", "4"],
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