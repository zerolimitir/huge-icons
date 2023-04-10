import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPreviousArrow = (
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
            d='m10.023 17.245.378-.647-.378.647Zm-6.03-3.518.377-.647-.378.647Zm0-3.455-.379-.647.378.647Zm6.03-3.518.378.648-.378-.648Zm8 10.491.378-.647-.378.647Zm0-10.49.378.647-.378-.648ZM9.645 17.892l-6.03-3.518.755-1.295 6.03 3.518-.755 1.295Zm-6.03-8.268 6.03-3.518.756 1.295-6.03 3.518-.757-1.295Zm0 4.75c-1.82-1.06-1.82-3.69 0-4.75l.755 1.295a1.25 1.25 0 0 0 0 2.16l-.756 1.295Zm10.166 1.143c0 2.122-2.303 3.445-4.136 2.375l.756-1.295a1.25 1.25 0 0 0 1.88-1.08h1.5Zm-1.5-7.036a1.25 1.25 0 0 0-1.88-1.08l-.756-1.295c1.833-1.07 4.136.253 4.136 2.375h-1.5Zm9.5 0v7.036h-1.5V8.482h1.5Zm0 7.036c0 2.122-2.303 3.445-4.136 2.375l.756-1.295a1.25 1.25 0 0 0 1.88-1.08h1.5Zm-1.5-7.036a1.25 1.25 0 0 0-1.88-1.08l-.756-1.295c1.833-1.07 4.136.253 4.136 2.375h-1.5Zm-7.628.537 4.992-2.912.756 1.295-4.992 2.912-.756-1.295Zm1.128-.537v1.185h-1.5V8.482h1.5Zm0 1.185v4.666h-1.5V9.667h1.5Zm0 4.666v1.185h-1.5v-1.185h1.5Zm3.864 3.56-4.992-2.912.756-1.296 4.992 2.913-.756 1.295Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPreviousArrow);
export default ForwardRef;
