import { IChildren } from "../../interfaces"
import { BackgroundModal, ContentModal } from "./style"
import {IoMdCloseCircleOutline} from "react-icons/io"
import { useModal } from "../../providers/modal"

interface IProps extends IChildren{
  title: string
}

export const Modal = ({children, title}: IProps) => {
  const {closeModal} = useModal()


  return (
    <BackgroundModal>
      <ContentModal>
        <h1>{title}</h1>
        <IoMdCloseCircleOutline onClick={() => closeModal()}/>
        <div>
          {children}
        </div>
      </ContentModal>
    </BackgroundModal>
  )
}