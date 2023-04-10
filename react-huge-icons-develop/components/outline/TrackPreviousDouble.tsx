import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPreviousDouble = (
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
            d='m10.023 17.245.378-.647-.378.647Zm-6.03-3.518-.379.648.378-.648Zm0-3.455-.379-.647.378.647Zm6.03-3.518-.378-.647.378.647Zm8 10.491.378-.647-.378.647Zm0-10.49.378.647-.378-.648Zm-4.992 2.912h-.75a.75.75 0 0 0 1.128.647l-.378-.647Zm0 4.666.378-.648a.75.75 0 0 0-1.128.648h.75ZM3.75 7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 10a.75.75 0 1 0 1.5 0h-1.5Zm8.15-.402L4.37 13.08l-.756 1.295 6.031 3.518.756-1.295ZM4.37 10.92l6.03-3.518-.755-1.295-6.03 3.518.755 1.295Zm0 2.16a1.25 1.25 0 0 1 0-2.16l-.756-1.295c-1.819 1.06-1.819 3.69 0 4.75l.756-1.295Zm5.275 4.813c1.833 1.07 4.136-.253 4.136-2.375h-1.5a1.25 1.25 0 0 1-1.88 1.08l-.756 1.295Zm.756-10.49a1.25 1.25 0 0 1 1.88 1.079h1.5c0-2.122-2.303-3.445-4.136-2.375l.756 1.295Zm7.244 10.49c1.833 1.07 4.136-.253 4.136-2.375h-1.5a1.25 1.25 0 0 1-1.88 1.08l-.756 1.295Zm.756-10.49a1.25 1.25 0 0 1 1.88 1.079h1.5c0-2.122-2.303-3.445-4.136-2.375l.756 1.295Zm1.88 1.079v7.036h1.5V8.482h-1.5Zm-8 0v1.185h1.5V8.482h-1.5Zm1.128 1.832L18.4 7.402l-.756-1.295-4.992 2.912.756 1.295Zm-1.128 4.02v1.184h1.5v-1.185h-1.5Zm6.12 2.264-4.992-2.913-.756 1.296 4.992 2.912.756-1.295ZM2.25 7v10h1.5V7h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPreviousDouble);
export default ForwardRef;
