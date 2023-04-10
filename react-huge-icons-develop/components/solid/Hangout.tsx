import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHangout = (
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
            d='M12 1c-5.248 0-9.5 4.308-9.5 9.625 0 5.042 4.524 9.167 9.5 9.167V23c5.745-2.842 9.5-7.517 9.5-12.375C21.5 5.308 17.248 1 12 1Zm-.452 11c0 1.283-.815 2.292-1.81 2.292V12H7.476V7.875h4.072V12Zm5.428 0c0 1.283-.814 2.292-1.81 2.292V12h-2.261V7.875h4.071V12Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHangout);
export default ForwardRef;
