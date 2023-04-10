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
            fillRule='evenodd'
            d='M13 8V5.5a2 2 0 0 0-2-2H9.667a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2Zm6 14a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2h-1.333a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6ZM16 5.25a.75.75 0 0 0 0 1.5h1c.69 0 1.25.56 1.25 1.25v4.5a.75.75 0 0 0 1.5 0V8A2.75 2.75 0 0 0 17 5.25h-1ZM5.75 13a.75.75 0 0 0-1.5 0v3A2.75 2.75 0 0 0 7 18.75h1a.75.75 0 0 0 0-1.5H7c-.69 0-1.25-.56-1.25-1.25v-3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderShare);
export default ForwardRef;
