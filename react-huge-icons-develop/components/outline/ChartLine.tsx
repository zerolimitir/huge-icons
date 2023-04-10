import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartLine = (
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
            d='M2.75 2a.75.75 0 0 0-1.5 0h1.5ZM22 22.75a.75.75 0 0 0 0-1.5v1.5Zm-9.544-12.735-.592.46.592-.46Zm2.966 3.814.592-.46-.592.46Zm1.822 0-.592-.46.592.46Zm4.348-4.369a.75.75 0 0 0-1.184-.92l1.184.92ZM6.408 14.54a.75.75 0 0 0 1.184.92l-1.184-.92Zm4.47-4.525.591.46-.592-.46ZM1.25 2v16h1.5V2h-1.5ZM6 22.75h16v-1.5H6v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5Zm10.614-7.525 2.966 3.814 1.184-.92-2.966-3.815-1.184.921Zm5.972 3.814 3.756-4.829-1.184-.92-3.756 4.828 1.184.921Zm-3.006 0a1.897 1.897 0 0 0 3.006 0l-1.184-.92a.397.397 0 0 1-.638 0l-1.184.92ZM7.592 15.46l3.877-4.985-1.184-.92-3.877 4.985 1.184.92Zm5.456-5.906c-.7-.9-2.062-.9-2.763 0l1.184.921a.25.25 0 0 1 .395 0l1.184-.92Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartLine);
export default ForwardRef;
