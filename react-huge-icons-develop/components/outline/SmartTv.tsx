import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartTv = (
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
            d='M12.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.962-3.712a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06a.75.75 0 1 0 1.061 1.061l-1.06-1.06ZM7.227 8.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM2 7h-.75H2Zm4-4v.75V3Zm0 14v-.75.75Zm-4-4h.75H2Zm20 0h.75H22Zm-4 4v.75V17Zm4-10h-.75.75ZM6.751 20.293a.75.75 0 1 0 .498 1.415l-.498-1.415Zm10.014 1.42a.75.75 0 1 0 .47-1.425l-.47 1.424ZM11.25 20a.75.75 0 0 0 1.5 0h-1.5Zm1.5-3a.75.75 0 0 0-1.5 0h1.5ZM12 7.75a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 6.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 10.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061ZM8.288 9.288A5.231 5.231 0 0 1 12 7.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 10.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 9.25v1.5ZM21.25 7v6h1.5V7h-1.5ZM18 16.25H6v1.5h12v-1.5ZM2.75 13V7h-1.5v6h1.5ZM6 3.75h12v-1.5H6v1.5ZM2.75 7A3.25 3.25 0 0 1 6 3.75v-1.5A4.75 4.75 0 0 0 1.25 7h1.5ZM6 16.25A3.25 3.25 0 0 1 2.75 13h-1.5A4.75 4.75 0 0 0 6 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5Zm1.5-6A4.75 4.75 0 0 0 18 2.25v1.5A3.25 3.25 0 0 1 21.25 7h1.5ZM7.249 21.707c1.843-.648 3.236-.955 4.638-.957 1.406-.002 2.878.303 4.878.962l.47-1.424c-2.07-.683-3.715-1.04-5.35-1.038-1.638.002-3.21.366-5.134 1.043l.498 1.415ZM12.75 20v-3h-1.5v3h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartTv);
export default ForwardRef;
