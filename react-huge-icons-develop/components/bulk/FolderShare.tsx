import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderShare = (
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
            d='M13 8V5.5a2 2 0 0 0-2-2H9.667a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2Zm8 12v-2.5a2 2 0 0 0-2-2h-1.333a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M14.25 6a.75.75 0 0 1 .75-.75h2A2.75 2.75 0 0 1 19.75 8v5.5a.75.75 0 0 1-1.5 0V8c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1-.75-.75ZM5 11.25a.75.75 0 0 1 .75.75v4c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H7A2.75 2.75 0 0 1 4.25 16v-4a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderShare);
export default ForwardRef;
