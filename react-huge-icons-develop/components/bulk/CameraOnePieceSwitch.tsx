import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraOnePieceSwitch = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M17 13.853v-2.118c0-1.462-1.244-2.647-2.778-2.647h-.07C13.906 8.175 13.036 7.5 12 7.5s-1.905.675-2.152 1.588h-.07C8.244 9.088 7 10.273 7 11.735v2.118C7 15.315 8.244 16.5 9.778 16.5h4.444c1.534 0 2.778-1.185 2.778-2.647Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.25 4c0-.942.782-1.806 1.83-1.69 4.877.537 8.67 4.67 8.67 9.69a.75.75 0 0 1-1.5 0 8.251 8.251 0 0 0-7.334-8.2.118.118 0 0 0-.101.037.226.226 0 0 0-.065.163v.5a.75.75 0 0 1-1.5 0V4ZM3 11.25a.75.75 0 0 1 .75.75 8.251 8.251 0 0 0 7.334 8.2.118.118 0 0 0 .101-.037.226.226 0 0 0 .065-.163v-.5a.75.75 0 0 1 1.5 0v.5c0 .942-.782 1.806-1.83 1.69-4.877-.538-8.67-4.67-8.67-9.69a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M13.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraOnePieceSwitch);
export default ForwardRef;
