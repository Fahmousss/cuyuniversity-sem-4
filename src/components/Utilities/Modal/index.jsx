"use client";

import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import VideoPlayer from "../VideoPlayer";
import { FaYoutube } from "react-icons/fa6";

export default function MyModal({ trailer, title, name }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Button
        className="fixed bottom-0 right-0 m-4"
        size="lg"
        variant="ghost"
        onPress={onOpen}
        color="success"
        isIconOnly
        radius="full"
      >
        <FaYoutube />
      </Button>
      <Modal
        isOpen={isOpen}
        placement="center"
        backdrop="blur"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody>
            <VideoPlayer youtubeId={trailer} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
