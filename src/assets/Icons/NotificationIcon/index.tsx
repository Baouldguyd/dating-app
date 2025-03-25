import React from "react";

const NotificationIcon = () => {
  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        y="0.804878"
        width="25"
        height="25"
        fill="url(#pattern0_2197_111)"
      />
      <defs>
        <pattern
          id="pattern0_2197_111"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_111" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_111"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJRUlEQVR4nO1de6xcRRk/Bdui8iioSGm52z3fN3eva1Kplwh/EMvD+I/B8CgPheAzaqUqGHlUXq0SIDxbEgkhKg9FE4yBEIoSHgFtC0YpsVUgAtY2qX3cvTN7721rX9wl395tPec7M7tz5u7u2b07v+RLbvbMmfPN7zsz852Z75sbBB4eHh4eHh4eHh4eHh4eHh4eHh4tRaVYnCEBlkiAVxXAzpq8IgGuoGue/jZiqFA4UQKsU4gVnUjE13YMDMz2Rmlfz1hnMkbEKH+rDA5O90ZpMSTAkkbGiBhlsTdI6w3yaox4gKdLQswpIc5ViKuYUdZ6g7QYCmAsSjoZ4uC1YYCTmLFGp4xBKkEwLehAKDYspb3etdxKxEsl4otD/f0DQQdBdbFBykKECvGZYSG+lOrGzXPnflAhbqo1ardEvLGCODPIGMN8SJqYuKUE2FcVRMmv0z1Z603cEYfEZU2vTcSxdQVSiBtijQbYWwbAIAOUhJijEK9UiGsk4rith8Xk7wrxmu253AlZtIG4Iw4Zpz+2urmEeDR/0yTinUGbMYr4MQWwkjdkMiIB9iiA++nDst3tkYh3MV2GhwqFo2xuvI7dWJJheEwbJ7zD6e0hD6lZhkjIRN1XVYLgsHa1S+Vys8gITJdr6t60MZc7QiJuY73jRlN5GYZfUQCfbpbSo/39H5UAz7XMEMn55/mxMDy+WfoTF8SJ6bpEvJnpsLXu3EyeFXuTRsp9fcfWmWB3ScQDCmCFVfdr0BiFuLldxoiMAO+OFAqFyehObScOalzsjH4bRUFc8p5f1+NSAC8zZe+pU/bX7G17zbVBZYBBiajabYzIi7dlJAyFq/7Udlbno8ayAPcy3l7UFqS3JOrF0N+mb5Ba2QNMia+7NIZ6Gh8mVQYiAd4ZGRj4iEsbFOI3GMkHRvL5fl3ZEmKRlR0vI0KioAS4nr01L9dR4GHWmNddJki6h/YwsjaG+j85f3T5iq62Y8K1jnLyUB3+VrPnXpcoRMvV0UJlgG/pKhvL5z+ecEWFOD9tI9Ku3Kr2GcVphVghLmIG2WtyGOgZrOxfdMNGdLh6z/QRVXVJ4z3pDZfeUV2dBRjpQINIl6Gr1tvfjL3UiNfqytLmGXEceeZ4zBFQQnyVKbba9GCJ+Daz7pK0ylefifhI1uQrs1HucmmTFOL7jJu36rR/Taxs1F2m8Y4pdLO2EiFOZsrvcvlorPZIgH1ZE69MQq5pLjfL6eMP8X8xLvP5+dqyAMuY8X5x6CL54kyhMwyV/IRV8vu0SlefN7HQlj3xWKeXAFzh2LYnGJfLtVyG4VmsE7xdvUDjJVNkD32xaytBXMsqudRFaT7WdqQAvOLSNol4mc3wv2X27A8lnCPqlRJxITPIOl0F24vFI6PDDE1E5HGlNkZ/fz5zstGihyC+RwucadtHnlXMQQLYt3X+/A9ruUBcH3tmGJ5OBvkuezN+pb0Z4Eym9Ia0ytbq+WbWZCtLKSNe6NjGN2JEC/FZQ7nH2EuwmH5caeOqaTyIXzoq+7OsiVa2vQTgdqc2Jj+ctZ6oBFjKOsMK+vF30R+Hw/AS7c2ID7Kbf+iibDtXc9XkZZVLGxXAj5hBHjBw+mXWQx5PTtSG7iUBnmXlvuCirE2Qm+occRqWJeI5rJ4/6MqRN8vKrSGC/h39UbvQNdEN/8EM8ikXZSN79R0vEmDIsY0LWF3rdeVohZk9710yyI7ojybPgpdz8bB0cVUdLrtd2kjLTjGiEbeZPDJWbnvAN0zIvbUh0lSuETqA5Ip1D0Ecd96wsgjY05aTAPujP1YWLvyA7uZEuSA43EXZrElWKcWljcRhzLAA+63LORvEUK4ResIgg4PTGdH7rA1iOxTxpXIKF3JRthcMonK5WTGiEVWaIctqUlcA/40ZRIg5Tsr2gEGGk0HfW6wn9YTba4hQpG3aWDkhPuOibC8YpIR4mk0ACO27J9xe2w9DBfAUU3aRi7K9YJAywEWsnifTfBhaLZ0oxPuY1W9yUbYXDKLY5lN1jcp66YQtLmojIHShLo6bUz1hEMQnWT1fs4xPWGG9/F4Ow1NsJioLZae0QSpBMI1CRFk9C7RcAPyGdYbFug2q17UPKhZncBfZJZlnqhtkGOCT7MUdNWUD0+JlYoNKt4VrSiah7B9m0R94g8RBUfXMIE8H5i3ceKDHwcAK6yAH/jDEPwcpMdV7iGLhPZRspC0Xhmezl/tfhy7S7p9NGJCcNy/HA+rSpoxNZYPIJD/jMgz7tDwALGcj08/dAuWSeeLLvEEmoAB+apsnnwiUA7jcLZSUxaWSt2V72EvNA5mSPaSCOJN7V2Uhvm08q6VeKGmN6L/aVEaLj3yhkVxnG6UpyjFrglVKsU1EkgDfYy/qqOleCsJrGAOm+Uj5k+nh/KudeolNmi9fu+kGGTHkeXCPKfHtAbDSdrjSRvrQg3nacUmIT+gqpIlKk5JwdSPFFeIFWROsUkoZ8fON2kWERu8hbkzODv9OqSbsCBHqCQN4iVV8r0mJRFgQ4oZGyS6JntUNAnBbw3kR4J82YT81jlcwgzyfJulz1JT0SUEOdL26k0j55A2i4GsTetuTOtUkxRRaGwWFipK3WR01AMZMh6eVi8XjeAxDGeDitGnRN9U9D8UQbs8xIsSpWZOrXAxSb0jhfOTz8+sFoCdWgRulRRvGw5JLroRGmdiqcjeJdEzgifHa13ds4uAAi3m3us+rOVpjUgrV8rPHutggyhTBbgtKMXc6WkOXkTvZw2cSQcVdKNJhIbXB4TNLMzmeqdbjtne9QQCGXM980RzP9J9UxzMR6MgHifjCZA8wU4i3ZE2map7c2oQDzFaZtslbfsQfrX5SYmgHEFlpkuxWhcK8rjw+kR5KJyN0AImVZgqNGp16HmVdDCN+J2vyVIvEtPDasagOVa08gAwzFoCdpjyajsNUHapUtw5ddGhN1mSpNonpgJ6OAp07lTVRql29BOCdoNPBo+SntIBbsGBbURbic73QSyS1MQzPzppvDw8PDw+PrkFlcHB6M5wESt3z/72tSVAA5zbBIF9slj4eQTWg4u5JGOMOT2Jr1sjudjFGV6w5dStUGJ4nATbazBk01GWtb0+gUizOoOP3FOJva8lGtCu5q/r3RN7eIj+Be3h4eHh4eHh4eHh4eHh4eHh4BC3F+03uk+2AiZK0AAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default NotificationIcon;
