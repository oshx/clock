import "/src/style.css";
import "/src/generated.css";
import { $app, UPDATE_INTERVAL } from "/src/config";

function renderClock() {
  const now = new Date();

  const datetime = now.toISOString();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const hourDegree = ~~(Math.abs(now.getHours() - 12) * 30);
  const minuteDegree = ~~(now.getMinutes() * 6);
  const secondDegree = ~~(now.getSeconds() * 6);

  $app.innerHTML = /* HTML */ `
    <time class="time" datetime="${datetime}">
      <div class="circle-clock">
        <i
          class="circle-clock__pointer circle-clock__pointer--hour circle-clock__pointer--${hourDegree}deg"
        ></i>
        <i
          class="circle-clock__pointer circle-clock__pointer--minute circle-clock__pointer--${minuteDegree}deg"
        ></i>
        <i
          class="circle-clock__pointer circle-clock__pointer--second circle-clock__pointer--${secondDegree}deg"
        ></i>
        <span class="circle-clock__overlay">
          <span class="overlay">
            ${year}년 ${month}월 ${date}일 <br />${hours}:${minutes}:${seconds}
          </span>
        </span>
      </div>
    </time>
  `;
}

setInterval(renderClock, UPDATE_INTERVAL);
renderClock();
