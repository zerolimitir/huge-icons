import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNextArrow = (
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
            d='m14.008 17.245-.378-.647.378.647Zm6.03-3.518-.377-.647.377.647Zm0-3.455.378-.647-.378.647Zm-6.03-3.518-.378.648.378-.648Zm-8 10.491-.378-.647.378.647Zm0-10.49-.378.647.378-.648Zm8.378 11.138 6.03-3.518-.755-1.295-6.031 3.518.756 1.295Zm6.03-8.268-6.03-3.518-.756 1.295 6.03 3.518.756-1.295Zm0 4.75c1.82-1.06 1.82-3.69 0-4.75l-.755 1.295a1.25 1.25 0 0 1 0 2.16l.755 1.295ZM10.25 15.518c0 2.122 2.302 3.445 4.136 2.375l-.756-1.295a1.25 1.25 0 0 1-1.88-1.08h-1.5Zm1.5-7.036a1.25 1.25 0 0 1 1.88-1.08l.756-1.295c-1.834-1.07-4.136.253-4.136 2.375h1.5Zm-9.5 0v7.036h1.5V8.482h-1.5Zm0 7.036c0 2.122 2.302 3.445 4.136 2.375l-.756-1.295a1.25 1.25 0 0 1-1.88-1.08h-1.5Zm1.5-7.036a1.25 1.25 0 0 1 1.88-1.08l.756-1.295C4.552 5.037 2.25 6.36 2.25 8.482h1.5Zm7.628.537L6.386 6.107 5.63 7.402l4.992 2.912.756-1.295Zm-1.128-.537v1.185h1.5V8.482h-1.5Zm0 1.185v4.666h1.5V9.667h-1.5Zm0 4.666v1.185h1.5v-1.185h-1.5Zm-3.864 3.56 4.992-2.912-.756-1.296-4.992 2.913.756 1.295Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNextArrow);
export default ForwardRef;
