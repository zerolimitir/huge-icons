import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderOpenRemove = (
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
            d='M17 4a3 3 0 0 1 2.959 2.5H4V5a3 3 0 0 1 3-3h2.57a3 3 0 0 1 1.843.634l.94.732A3 3 0 0 0 14.199 4H17Zm3.526 4H3.474a2 2 0 0 0-1.956 2.42l1.804 8.418A4 4 0 0 0 7.234 22h9.532a4 4 0 0 0 3.912-3.162l1.804-8.419A2 2 0 0 0 20.526 8Zm-6.935 9.652a.75.75 0 1 0 1.06-1.061L13.062 15l1.59-1.591a.75.75 0 0 0-1.06-1.06L12 13.938l-1.591-1.59a.75.75 0 1 0-1.06 1.06L10.938 15l-1.59 1.591a.75.75 0 1 0 1.06 1.06l1.59-1.59 1.592 1.59Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenRemove);
export default ForwardRef;
