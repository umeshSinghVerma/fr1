import React from 'react'
import Image from 'next/image'
import Modal from '@/components/modal/Modal';
import Frame from '@/components/frame/Frame';

export default function page({ params }) {
    return (
        <div>
            <Modal>
                <Frame/>
            </Modal>
        </div>
    )
}
