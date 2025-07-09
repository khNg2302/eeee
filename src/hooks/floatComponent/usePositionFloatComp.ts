import { useEffect, useRef, useState } from "react";

type FloatPosition = {
    left?: number,

    top?: number,

}

type FloatOffset = {
    maxWidth?: number,
    maxHeight?: number,

}


export const usePositionFloatComp = () => {
    const [position, setPosition] = useState<FloatPosition | null>(null)
    const [maxOffset, setMaxOffset] = useState<FloatOffset | null>(null)
    const ref = useRef<HTMLDivElement>(null);

    const getAvailablePosition = () => {
        if (ref.current) {
            console.log('/')

            const positionAvailable = { top: 100, left: 0 } as FloatPosition


            const { parentElement, offsetHeight, offsetWidth, offsetTop } = ref.current

            const maxOffsetAvailable = { maxWidth: offsetWidth, maxHeight: offsetHeight } as FloatOffset

            const screenHeight = window.innerHeight
            const screenWidth = window.innerWidth

            const heightAvailable = () => {
                const placeTop = () => {
                    const parentElementOffsetTop = parentElement?.offsetTop ?? 0
                    const isUnAvailableHeightPlace = screenHeight - parentElementOffsetTop <= parentElementOffsetTop
                    if (isUnAvailableHeightPlace) {
                        positionAvailable.top = 0
                    }
                    return positionAvailable.top

                }

                const maxHeight = () => {

                    maxOffsetAvailable.maxHeight = positionAvailable.top ? screenHeight - offsetTop : offsetTop
                    return maxOffsetAvailable.maxHeight
                }

                return placeTop() || maxHeight()
            }

            const widthAvailable = () => {
                const parentElementOffsetLeft = parentElement?.offsetLeft ?? 0
                const placeRight = () => {
                    const isUnAvailableWidthPlace = screenWidth - parentElementOffsetLeft < parentElementOffsetLeft
                    if (isUnAvailableWidthPlace) {
                        positionAvailable.left = 100
                    }
                    return positionAvailable.left
                }

                const maxWidth = () => {
                    maxOffsetAvailable.maxWidth = positionAvailable.left ? parentElementOffsetLeft + (parentElement?.offsetWidth ?? 0) : screenWidth - parentElementOffsetLeft
                    return maxOffsetAvailable.maxWidth
                }

                return placeRight() || maxWidth()
            }
            heightAvailable()
            widthAvailable()

            setPosition(positionAvailable)
            setMaxOffset(maxOffsetAvailable)

        }


    }

    useEffect(() => {
        getAvailablePosition()
    }, [])
    return {
        ref,
        position,
        maxOffset
    }
}