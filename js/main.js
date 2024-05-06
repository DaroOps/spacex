// import { getAllRockets, getMissionByRocket } from "./modules/rockets.js";
// import {
//     progressRocketWeight,
//     progressPayloadWeights,
//     progressHeightRocket,
//     progressDiameterRocket,
//     progressSecondStageDiameterRocket,
//     progressSecondStageHeightRocket
// } from "./modulesComponents/progressBar.js";

// import {buttonsSelection} from "./modulesComponents/buttonSelector.js"

// let information__1 = document.querySelector("#description__item")

// let information__2 = document.querySelector("#information__2");
// let dataRockets = await getAllRockets();
// let Totales = dataRockets.pop()

// let [Rockets1, Rockets2, Rockets3, Rockets4] = dataRockets;

// // console.log(dataRockets);
// // console.log(Totales);

// information__2.append(...progressRocketWeight(Totales.kg_max, Rockets3))
// information__2.append(...progressPayloadWeights(Totales.payload_weights, Rockets3))
// information__2.append(...progressHeightRocket(Totales.height, Rockets3))
// information__2.append(...progressDiameterRocket(Totales.diameter, Rockets3))
// information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rockets3))
// information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rockets3))

// // console.log(buttonsSelection(dataRockets))

// information__1.append(...await buttonsSelection(dataRockets))
// getMissionByRocket("5e9d0d96eda699382d09d1ee")
// .then(data => {
//     console.log("TEST",data)
// })
// import Chart from "chart.js/auto";
import { paginationRockets } from "./modulesComponents/pagination.js";

let paginacion = document.querySelector("#paginacion");
paginacion.append(await paginationRockets());

const ctx = document.getElementById("myChart");

// Configurar las opciones del plugin
Chart.defaults.plugins.doughnutlabel = {
  labels: [
    {
      text: "The title",
      font: {
        size: "60"
      }
    },
    {
      text: getTotal,
      font: {
        size: "50"
      },
      color: "grey"
    },
    {
      text: "$100.000",
      font: {
        size: "30"
      },
      color: "red"
    },
    {
      text: "95%",
      font: {
        size: "45"
      },
      color: "green"
    }
  ]
};

// Función para obtener el total
var getTotal = function (myDoughnutChart) {
  var sum = myDoughnutChart.config.data.datasets[0].data.reduce(
    (a, b) => a + b,
    0
  );
  return `Total: ${sum}`;
};

// Crear el gráfico
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Red"],
    datasets: [
      {
        data: [12],
        borderWidth: 1
      }
    ]
  }
});

// new Chart(ctx, {
//   type: "doughnut",
//   data: {
//     labels: ["Red"],
//     datasets: [
//       {
//         data: [12],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     cutout: 120,
//     plugins: {
//       doughnutlabel: {
//         labels: [
//           {
//             text: "95%",
//             font: {
//               size: "45",
//             },
//             color: "green",
//           },
//         ],
//       },
//     },
//   },
// });
