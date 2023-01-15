import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from './components/styles/Theme'
import QuestionnaireBody from "./components/QuestionnaireBody";
import Page from './components/Page'
import Text from "./components/Text";
import IntroContainer from "./components/IntroContainer";
import Radio from "./components/Radio";
import Nav from "./components/NavButton";
import InputRange from './components/InputRange'
import TextArea from './components/TextArea'
import Error from './components/Error'


function App() {
  const [page, SetPage] = React.useState(1)
  const initForm = { design: '', nav: '', content: '', rate: '', comment: '' }
  const [rates, setRates] = React.useState(initForm)
  const [variant, setVariant] = React.useState('light')
  const [errors, setErrors] = React.useState('')

  function handleClick() {
    function setDarkWithAlert() {
      setVariant('dark')
    }

    variant === 'light' ? setDarkWithAlert() : setVariant('light')
  }

  function getRating(data) {
    setRates({ ...rates, rate: data })
  }

  function getComment(comment) {
    setRates({ ...rates, comment: comment })
  }

  function finishAlert() {
    if (window.confirm("Questionnaire completed. Do you want to proceed?")) {
      return SetPage(page + 1)
    }
  }

  function ratesRender(rate) {
    if (rate === '1') {
      return 'not satisfied'
    }
    if (rate === '2') {
      return 'moderately satisfied'
    }
    if (rate === '3') {
      return 'very satisfied'
    }
  }

  function validate(currentPage) {
    setErrors('')
    if (currentPage === 2) {
      if (rates.design === '') { return setErrors({ design: 'Rate is required' }) }
      if (rates.nav === '') { return setErrors({ nav: 'Rate is required' }) }
      if (rates.content === '') { return setErrors({ content: 'Rate is required' }) }
      return SetPage(page + 1)
    }
    if (currentPage === 3) {
      if (rates.rate === '') { return setErrors({ rate: 'Rate is required' }) }
      return SetPage(page + 1)
    }
  }


  return (
    <>
      <ThemeProvider theme={Theme}>
        <QuestionnaireBody variant={variant}>
          <Page currentPage={1 === page ? true : false} onClick={() => handleClick()} variant={variant}>
            <IntroContainer variant={variant}>
              <Text size={'large'} variant={variant} variantStyle={'intro1'}>Tell Me</Text>
              <Text size={'large'} variant={variant} variantStyle={'intro1'}>What You</Text>
              <Text size={'larger'} variant={variant} variantStyle={'intro2'}>Think</Text>
            </IntroContainer>
            <Text size={'small'} variant={variant} variantStyle={'intro1'}>Thanks for agreeing to give me some feedback</Text>
            <Nav>
              <Nav.Button variant={variant} size={'medium'} onClick={() => SetPage(page + 1)}>Let's start!</Nav.Button>
            </Nav>
          </Page>
          <Page currentPage={2 === page ? true : false} onClick={() => handleClick()} variant={variant} >
            <Text size={'medium'} variant={variant} variantStyle={'intro1'}>Please rate website components</Text>
            <Radio variant={variant}>
              <Radio.Body variant={variant}>
                <Radio.Title variant={variant}>How satisfied are you with Web Design?</Radio.Title>
                <Radio.Input variant={variant} value="1" checked={rates.design === "1"} onChange={() => setRates({ ...rates, design: '1' })}>Not satisfied</Radio.Input>
                <Radio.Input variant={variant} value="2" checked={rates.design === "2"} onChange={() => setRates({ ...rates, design: '2' })}>Moderatly satisfied</Radio.Input>
                <Radio.Input variant={variant} value="3" checked={rates.design === "3"} onChange={() => setRates({ ...rates, design: '3' })}>Very satisfied</Radio.Input>
                {errors.design ? <Error /> : null}
              </Radio.Body>

              <Radio.Body variant={variant}>
                <Radio.Title variant={variant}>How satisfied are you with Web Navigation?</Radio.Title>
                <Radio.Input variant={variant} value="1" checked={rates.nav === "1"} onChange={() => setRates({ ...rates, nav: '1' })}>Not satisfied</Radio.Input>
                <Radio.Input variant={variant} value="2" checked={rates.nav === "2"} onChange={() => setRates({ ...rates, nav: '2' })}>Moderatly satisfied</Radio.Input>
                <Radio.Input variant={variant} value="3" checked={rates.nav === "3"} onChange={() => setRates({ ...rates, nav: '3' })}>Very satisfied</Radio.Input>
                {errors.nav ? <Error /> : null}
              </Radio.Body>
              <Radio.Body variant={variant}>
                <Radio.Title variant={variant}>How satisfied are you with Web Content?</Radio.Title>
                <Radio.Input variant={variant} value="1" checked={rates.content === "1"} onChange={() => setRates({ ...rates, content: '1' })}>Not satisfied</Radio.Input>
                <Radio.Input variant={variant} value="2" checked={rates.content === "2"} onChange={() => setRates({ ...rates, content: '2' })}>Moderatly satisfied</Radio.Input>
                <Radio.Input variant={variant} value="3" checked={rates.content === "3"} onChange={() => setRates({ ...rates, content: '3' })}>Very satisfied</Radio.Input>
                {errors.content ? <Error /> : null}
              </Radio.Body>
            </Radio>
            <Nav>
              <Nav.Button variant={variant} size={'medium'} onClick={() => validate(page)}>Next Step</Nav.Button>
            </Nav>
          </Page>
          <Page currentPage={3 === page ? true : false} onClick={() => handleClick()} variant={variant}>
            <Text size={'medium'} variant={variant} variantStyle={'intro1'}>Rate website form 1 to 10</Text>
            <InputRange parentCallback={getRating} value={rates.rate} min='1' max='10'></InputRange>
            {errors.rate ? <Error /> : null}
            <Text size={'medium'} variant={variant} variantStyle={'intro1'}>Leave a comment</Text>
            <TextArea parentCallback={getComment} value={rates.comment} />
            <Nav>
              <Nav.Button variant={variant} size={'medium'} onClick={() => SetPage(page - 1)}>Previous Step</Nav.Button>
              <Nav.Button variant={variant} size={'medium'} onClick={() => validate(page)}>Next Step</Nav.Button>
            </Nav>
          </Page>
          <Page currentPage={4 === page ? true : false} onClick={() => handleClick()} variant={variant}>
            <Text size={'medium'} variant={variant} variantStyle={'intro1'}>Summary:</Text>
            <Text size={'small'} variant={variant} variantStyle={'intro1'}>{`You are ${ratesRender(rates.design)} with website design`}</Text>
            <Text size={'small'} variant={variant} variantStyle={'intro1'}>{`You are ${ratesRender(rates.nav)} with website navigation`}</Text>
            <Text size={'small'} variant={variant} variantStyle={'intro1'}>{`You are ${ratesRender(rates.content)} with website content`}</Text>
            <Text size={'small'} variant={variant} variantStyle={'intro1'}>{`Your website rate: ${(rates.rate)}/10`}</Text>
            <Text size={'small'} variant={variant} variantStyle={'intro1'}>{rates.comment !== '' ? `Your comment: ${(rates.comment)}` : 'You did not comment'}</Text>

            <Nav>
              <Nav.Button variant={variant} size={'medium'} onClick={() => SetPage(page - 1)}>Previous Step</Nav.Button>
              <Nav.Button variant={variant} size={'medium'} onClick={() => finishAlert()}>Finish</Nav.Button>
            </Nav>
          </Page>
          <Page currentPage={5 === page ? true : false} onClick={() => handleClick()} variant={variant}>
            <Text size={'larger'} variant={variant} variantStyle={'intro3'}>Thank you!</Text>
          </Page>
        </QuestionnaireBody>
      </ThemeProvider>
    </>
  );
}

export default App;
