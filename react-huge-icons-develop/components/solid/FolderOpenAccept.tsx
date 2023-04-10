import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderOpenAccept = (
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
            d='M17 4a3.001 3.001 0 0 1 2.959 2.5H3.998V5a3 3 0 0 1 3-3h2.57a3 3 0 0 1 1.844.634l.94.732A3 3 0 0 0 14.197 4H17Zm3.526 4H3.474a2 2 0 0 0-1.956 2.42l1.804 8.418A4 4 0 0 0 7.234 22h9.532a4 4 0 0 0 3.912-3.162l1.804-8.419A2 2 0 0 0 20.526 8Zm-5.032 4.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .937-1.172l1.753 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenAccept);
export default ForwardRef;
