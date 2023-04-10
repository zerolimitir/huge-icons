import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalFilmstrip = (
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
            d='M18.75 2.07v19.86A4.001 4.001 0 0 0 22 18V6c0-1.953-1.4-3.579-3.25-3.93ZM17.25 2v5.25H6.75V2h10.5Zm-12 .07v19.86A4.001 4.001 0 0 1 2 18V6c0-1.953 1.4-3.579 3.25-3.93ZM6.75 22h10.5v-5.25H6.75V22Zm10.5-6.75H6.75v-6.5h10.5v6.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalFilmstrip);
export default ForwardRef;
