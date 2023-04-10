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
            fillRule='evenodd'
            d='M17 2.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Zm3.492 8.818a5.75 5.75 0 1 0-3.3 1.178l-4.445 4.447a5.75 5.75 0 1 0-1.178 3.3l8.923-8.925Zm-10.08 7.966A4.243 4.243 0 0 1 7 21.25a4.25 4.25 0 1 1 3.412-1.716Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVoiceMail);
export default ForwardRef;
