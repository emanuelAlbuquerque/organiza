import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ModalContent } from '@nextui-org/react'

const InvestimentoModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Investindo na UNABANCK
            </ModalHeader>
            <ModalBody>
              <p>
                {
                  props.result
                }
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export {
  InvestimentoModal
}
