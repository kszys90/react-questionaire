import { css } from 'styled-components';


const Theme = {
    body: {
        dark: css`
            border-radius: 27px;
            background: linear-gradient(145deg, #474747, #555555);
            box-shadow:  16px 16px 32px #474747,
                        -16px -16px 32px #575757;
            color: lightgrey;
        `,
        light: css`
            border-radius: 27px;
            background: linear-gradient(145deg, #d4dbd4, #fdfffd);
            box-shadow:  16px 16px 32px #d4dbd4,
                        -16px -16px 32px #ffffff;
        `
    },
    page: {
        dark: css`
            border-radius: 43px;
            background: grey;
            box-shadow:  10px 10px 19px #484747,
                        -10px -10px 19px #807d7d;
        `,
        light: css`
            color: white;
            border-radius: 43px;
            background: #646262;
            box-shadow:  10px 10px 19px #484747,
                        -10px -10px 19px #807d7d;
        `
    },
    text: {
        styled: {
            dark: {
                intro1: css`
                    padding: 10px;
                    margin-top: 5px;
                    margin-bottom: 5px;               
                 `,
                intro2: css`
                    padding: 10px;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    color: white;               
                `,
                intro3: css`
                    padding: 10px;
                    margin-top: 180px;
                    margin-bottom: 5px;
                    color: lightgrey;
                `
            },
            light: {
                intro1: css`
                    padding: 10px;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    color: black;


                `,
                intro2: css`
                    padding: 10px;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    color: darkgreen;

                `,
                intro3: css`
                    padding: 10px;
                    margin-top: 180px;
                    margin-bottom: 5px;
                    color: black;

                `
            }
        },
        size: {
            large: css`
                font-size: 65px;
                font-weight: bold;
            `,
            larger: css`
               font-size: 80px;
                font-weight: bold;
            `,
            medium: css`
                font-size: 30px;
                font-weight: bold;

            `,
            small: css`
                font-size: 20px;
            `

        }
    },
    introContainer: {
        dark: css`
            margin-top: 40px;
            margin-bottom: 40px;
            border-radius: 27px;
            background: linear-gradient(145deg, #2b2828, #332f2f);
            box-shadow:  40px 40px 28px #2b2828,
                        -40px -40px 28px #353030;
        `,
        light: css`
            margin-top: 40px;
            margin-bottom: 40px;
            border-radius: 27px;
            background: linear-gradient(145deg, #f3f3f3, #cccccc);
            box-shadow:  16px 16px 32px #9a9a9a,
                         -16px -16px 32px #ffffff;
        `
    },
    button: {
        variant: {
            dark: css`
                border: 0.3px solid black;
                color: lightgrey;
                border-radius: 4px;
                background: linear-gradient(145deg, #2b2828, #332f2f);
                box-shadow:  5px 5px 10px #2b2828,
                             -5px -5px 10px #353030;
            `,
            light: css`
                border: 0.3px solid black;
                color: black;
                border-radius: 4px;
                background: linear-gradient(145deg, #f3f3f3, #cccccc);
                box-shadow:  5px 5px 10px #5b5b5b,
                            -5px -5px 10px #ffffff;
            `
        },
        size: {
            large: css`
                margin-top: 20px;
                padding: 20px;
                font-size: 25px;
            `,
            medium: css`
                margin: 20px;
                padding: 15px;
                font-size: 18px;
                width: 150px;
            `,
        }
    },
    radio: {
        variant: {
            dark: css`
                    border: 0.3px solid black;
                    color: lightgrey;
                    border-radius: 4px;
                    background: linear-gradient(145deg, #2b2828, #332f2f);
                    box-shadow:  5px 5px 10px #2b2828,
                                -5px -5px 10px #353030;
            `,
            light: css`
                border: 0.3px solid black;
                    color: black;
                    border-radius: 4px;
                    background: linear-gradient(145deg, #f3f3f3, #cccccc);
                    box-shadow:  5px 5px 10px #5b5b5b,
                                -5px -5px 10px #ffffff;
            `
        }
    }
}


export default Theme