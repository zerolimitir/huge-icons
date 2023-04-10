import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpellCheck = (
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
            d='M6 11.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5H6v1.5Z'
        />
        <path
            fill='currentColor'
            d='m9 4 .692-.288a.75.75 0 0 0-1.384 0L9 4ZM3.308 15.711a.75.75 0 0 0 1.384.577l-1.384-.577Zm10 .577a.75.75 0 0 0 1.384-.577l-1.384.577Zm-5-12.576-5 12 1.384.576 5-12-1.384-.576Zm6.384 12-5-12-1.384.576 5 12 1.384-.577Zm-3.19.73a.75.75 0 1 0-1.004 1.116l1.004-1.116Zm9.043-1.927a.75.75 0 0 0-1.09-1.03l1.09 1.03Zm-6.937 4.832-.502.557.502-.557Zm1.396-.057-.546-.515.546.515Zm-4.506-1.732 2.608 2.346 1.003-1.115-2.607-2.347-1.004 1.116Zm5.05 2.247 4.997-5.29-1.09-1.03-4.997 5.29 1.09 1.03Zm-2.442.1a1.75 1.75 0 0 0 2.443-.1l-1.09-1.03a.25.25 0 0 1-.35.014l-1.003 1.115Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpellCheck);
export default ForwardRef;
