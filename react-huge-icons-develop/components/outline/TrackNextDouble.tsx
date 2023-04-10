import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackNextDouble = (
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
            d='m14.008 17.245-.378-.647.378.647Zm6.03-3.518.378.648-.378-.648Zm0-3.455.378-.647-.378.647Zm-6.03-3.518.378-.647-.378.647Zm-8 10.491-.378-.647.378.647Zm0-10.49-.378.647.378-.648ZM11 9.666l-.378.647a.75.75 0 0 0 1.128-.647H11Zm0 4.666h.75a.75.75 0 0 0-1.128-.648l.378.648ZM21.75 7.5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 9a.75.75 0 1 0 1.5 0h-1.5Zm-5.864 1.393 6.03-3.518-.755-1.295-6.031 3.518.756 1.295Zm6.03-8.268-6.03-3.518-.756 1.295 6.03 3.518.756-1.295Zm0 4.75c1.82-1.06 1.82-3.69 0-4.75l-.755 1.295a1.25 1.25 0 0 1 0 2.16l.755 1.295Zm-6.786 2.223a1.25 1.25 0 0 1-1.88-1.08h-1.5c0 2.122 2.302 3.445 4.136 2.375l-.756-1.295Zm.756-10.491c-1.834-1.07-4.136.253-4.136 2.375h1.5a1.25 1.25 0 0 1 1.88-1.08l.756-1.295ZM5.63 16.597a1.25 1.25 0 0 1-1.88-1.08h-1.5c0 2.123 2.302 3.446 4.136 2.376l-.756-1.295Zm.756-10.49C4.552 5.037 2.25 6.36 2.25 8.482h1.5a1.25 1.25 0 0 1 1.88-1.08l.756-1.295ZM2.25 8.482v7.036h1.5V8.482h-1.5Zm8 0v1.185h1.5V8.482h-1.5Zm1.128.537L6.386 6.107 5.63 7.402l4.992 2.912.756-1.295Zm-1.128 5.314v1.185h1.5v-1.185h-1.5Zm-3.864 3.56 4.992-2.912-.756-1.296-4.992 2.913.756 1.295ZM20.25 7.5v9h1.5v-9h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackNextDouble);
export default ForwardRef;
