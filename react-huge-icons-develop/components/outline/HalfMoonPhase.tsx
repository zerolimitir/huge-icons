import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHalfMoonPhase = (
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
            d='M12 19h-.75c0 .414.336.75.75.75V19Zm0-14v-.75a.75.75 0 0 0-.75.75H12Zm9.25 7A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM18.25 12A6.25 6.25 0 0 1 12 18.25v1.5A7.75 7.75 0 0 0 19.75 12h-1.5ZM12 5.75A6.25 6.25 0 0 1 18.25 12h1.5A7.75 7.75 0 0 0 12 4.25v1.5ZM11.25 5v14h1.5V5h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHalfMoonPhase);
export default ForwardRef;
