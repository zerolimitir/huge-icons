import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderOpenMinus = (
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
            d='M20.526 8H3.474a2 2 0 0 0-1.956 2.42l1.804 8.418A4 4 0 0 0 7.234 22h9.532a4 4 0 0 0 3.912-3.162l1.804-8.419A2 2 0 0 0 20.526 8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.75 15a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M20 8V7a3 3 0 0 0-3-3h-2.803a3 3 0 0 1-1.843-.634l-.94-.732A3 3 0 0 0 9.568 2H7a3 3 0 0 0-3 3v3h16Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenMinus);
export default ForwardRef;
