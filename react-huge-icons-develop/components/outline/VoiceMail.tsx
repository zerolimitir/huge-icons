import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVoiceMail = (
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
            d='M10.47 19.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm10.06-7.94a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM11.25 17A4.25 4.25 0 0 1 7 21.25v1.5A5.75 5.75 0 0 0 12.75 17h-1.5ZM7 21.25A4.25 4.25 0 0 1 2.75 17h-1.5A5.75 5.75 0 0 0 7 22.75v-1.5ZM2.75 17A4.25 4.25 0 0 1 7 12.75v-1.5A5.75 5.75 0 0 0 1.25 17h1.5ZM7 12.75A4.25 4.25 0 0 1 11.25 17h1.5A5.75 5.75 0 0 0 7 11.25v1.5ZM21.25 7A4.25 4.25 0 0 1 17 11.25v1.5A5.75 5.75 0 0 0 22.75 7h-1.5ZM17 11.25A4.25 4.25 0 0 1 12.75 7h-1.5A5.75 5.75 0 0 0 17 12.75v-1.5ZM12.75 7A4.25 4.25 0 0 1 17 2.75v-1.5A5.75 5.75 0 0 0 11.25 7h1.5ZM17 2.75A4.25 4.25 0 0 1 21.25 7h1.5A5.75 5.75 0 0 0 17 1.25v1.5Zm-5.47 17.78 9-9-1.06-1.06-9 9 1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVoiceMail);
export default ForwardRef;
