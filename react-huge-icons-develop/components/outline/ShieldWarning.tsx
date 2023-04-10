import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShieldWarning = (
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
        <circle cx={12} cy={17} r={1} fill='currentColor' transform='rotate(-180 12 17)' />
        <path
            fill='currentColor'
            d='M11.25 14a.75.75 0 0 0 1.5 0h-1.5Zm1.5-7a.75.75 0 0 0-1.5 0h1.5ZM5.332 4.71l-.316-.68.316.68Zm5.039-2.346.316.68-.316-.68Zm3.275 0 .317-.68-.317.68Zm5.019 2.337-.317.68.317-.68ZM3.006 8.578l-.749.041.75-.041ZM9.928 21.33l.434-.611-.434.611Zm4.162.001.434.611-.434-.61ZM20.992 8.6l-.748-.046.748.046ZM12.75 14V7h-1.5v7h1.5Zm-7.1-8.61 5.037-2.346-.633-1.36-5.038 2.347.633 1.36Zm7.68-2.346 5.018 2.337.633-1.36-5.018-2.337-.633 1.36ZM2.257 8.62c.185 3.32.745 5.796 1.915 7.888 1.171 2.092 2.912 3.727 5.322 5.436l.868-1.223c-2.327-1.65-3.865-3.131-4.88-4.946-1.016-1.814-1.549-4.036-1.727-7.238l-1.498.083Zm12.268 13.325c2.42-1.721 4.147-3.372 5.306-5.466 1.158-2.092 1.71-4.555 1.91-7.832l-1.497-.092c-.194 3.165-.718 5.379-1.725 7.198-1.006 1.817-2.533 3.312-4.864 4.969l.87 1.223Zm-5.031 0a4.325 4.325 0 0 0 5.03 0l-.869-1.223a2.825 2.825 0 0 1-3.293-.001l-.868 1.223Zm1.193-18.9a3.115 3.115 0 0 1 2.643 0l.633-1.36a4.614 4.614 0 0 0-3.909 0l.633 1.36Zm7.66 2.337a3.296 3.296 0 0 1 1.897 3.173l1.497.092a4.796 4.796 0 0 0-2.76-4.624l-.633 1.36ZM5.017 4.031a4.787 4.787 0 0 0-2.759 4.588l1.498-.083A3.287 3.287 0 0 1 5.65 5.391l-.633-1.36Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShieldWarning);
export default ForwardRef;
