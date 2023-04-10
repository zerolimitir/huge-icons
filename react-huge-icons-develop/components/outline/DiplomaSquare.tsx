import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDiplomaSquare = (
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
            d='M17.625 16.816a.75.75 0 1 0 .75 1.298l-.75-1.298Zm-12 1.298a.75.75 0 1 0 .75-1.298l-.75 1.298ZM8 5.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-1.75 7.75v-.75h-1.5v.75h1.5ZM9.5 22h-.75a.75.75 0 0 0 1.029.696L9.5 22Zm2.5-1 .278-.696a.75.75 0 0 0-.556 0L12 21Zm2.5 1-.278.696A.75.75 0 0 0 15.25 22h-.75Zm.75-3.5v-.75h-1.5v.75h1.5Zm4-12.5v8h1.5V6h-1.5Zm-14.5 8V6h-1.5v8h1.5ZM8 2.75h8v-1.5H8v1.5ZM4.75 6A3.25 3.25 0 0 1 8 2.75v-1.5A4.75 4.75 0 0 0 3.25 6h1.5Zm16 0A4.75 4.75 0 0 0 16 1.25v1.5A3.25 3.25 0 0 1 19.25 6h1.5Zm-1.5 8a3.249 3.249 0 0 1-1.625 2.816l.75 1.298A4.748 4.748 0 0 0 20.75 14h-1.5Zm-16 0c0 1.76.957 3.294 2.374 4.114l.752-1.298A3.249 3.249 0 0 1 4.75 14h-1.5Zm11 2A2.25 2.25 0 0 1 12 18.25v1.5A3.75 3.75 0 0 0 15.75 16h-1.5ZM12 18.25A2.25 2.25 0 0 1 9.75 16h-1.5A3.75 3.75 0 0 0 12 19.75v-1.5ZM9.75 16A2.25 2.25 0 0 1 12 13.75v-1.5A3.75 3.75 0 0 0 8.25 16h1.5ZM12 13.75A2.25 2.25 0 0 1 14.25 16h1.5A3.75 3.75 0 0 0 12 12.25v1.5Zm-4-7h8v-1.5H8v1.5Zm0 4h4v-1.5H8v1.5Zm.75 7.75V22h1.5v-3.5h-1.5Zm1.029 4.196 2.5-1-.557-1.392-2.5 1 .557 1.392Zm1.943-1 2.5 1 .556-1.392-2.5-1-.556 1.392ZM15.25 22v-3.5h-1.5V22h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDiplomaSquare);
export default ForwardRef;
