import { useEffect, useState } from 'react'
import Button from "../atoms/Button";
import Modal from "../molecules/Modal";
import GroupContainer from '../atoms/GroupContainer';

const ErrorDialog = (props) => {
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  const [stringError, setStringError] = useState()

  useEffect(() => {
    setStringError(
      props.error
        ? typeof props.error === 'string'
          ? props.error
          : JSON.stringify(props.error, null, 2)
        : null
    )
    console.log(props.error)
  }, [props.error])

  useEffect(() => {
    if (stringError) {
      const lines = stringError.split('\n')
      setHeight(lines.length)
      setWidth(lines.reduce((a, b) => (a < b ? b : a), 100))
    }
  }, [stringError])

  return (
    <Modal
      onClose={props.onClose}
      aria-labelledby="simple-dialog-title"
      open={props.error}
      title={props.title}
    >
      Something bad happened. The details of the error are below.
      Please copy them and send them to systems support.
      <p />
      <textarea
        id="ErrorDialog-error"
        readOnly
        style={{
          height: height * 14 + 'px',
          width: width + 'ex',
        }}
        value={stringError}
      />
      <GroupContainer>
        <Button
          onClick={() => {
            const copyText = document.getElementById(
              'ErrorDialog-error'
            )
            copyText.select()
            navigator.clipboard.writeText(copyText.value)
          }}
          color="primary"
        >
          Copy Error
        </Button>
        <Button onClick={() => props.onClose()}>Close</Button>
      </GroupContainer>
    </Modal>
  )
}

export default ErrorDialog