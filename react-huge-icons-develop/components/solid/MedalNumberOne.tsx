import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMedalNumberOne = (
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
            d='M17 5v4.125A8.462 8.462 0 0 0 12 7.5a8.462 8.462 0 0 0-5 1.625V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Zm5.53 6.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06l1-1Zm-2.06 7.94a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06Zm-19-7.94a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 1 1-1.06 1.06l-1-1Zm2.06 7.94a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06ZM12 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm.75-10a.75.75 0 0 0-1.085-.67l-1 .5a.75.75 0 0 0 .585 1.377v4.043H11a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-.25V13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMedalNumberOne);
export default ForwardRef;
