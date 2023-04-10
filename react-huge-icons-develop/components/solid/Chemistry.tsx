import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChemistry = (
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
            d='M6.75 2a.75.75 0 0 0-1.5 0v5.25H4a.75.75 0 0 0 0 1.5h1.25v12.5H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H6.75V8.75h5.036l-3.01 6.02c-.914 1.829.416 3.98 2.46 3.98h7.528c2.044 0 3.374-2.151 2.46-3.98l-3.01-6.02H20a.75.75 0 0 0 0-1.5h-2.25v-4.5H18a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5h.25v4.5h-5.5V2Zm9.5.75v4.5h-2.5v-4.5h2.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChemistry);
export default ForwardRef;
