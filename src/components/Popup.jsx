'use client'
import React from 'react'
import PageWrapper from './PageWrapper'
import Modal from './modal/Modal'
import Frame from './frame/Frame'

export default function Popup({children}) {
  return (
    <PageWrapper>
        <Modal>
            <Frame>
                { children }
            </Frame>
        </Modal>
    </PageWrapper>
  )
}
