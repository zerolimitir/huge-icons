import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCheckCircle = (
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
            d='M8.502 11.443a.75.75 0 1 0-1.004 1.114l1.004-1.114Zm2.033 2.838.501-.557-.501.557Zm1.458-.13.592.461-.592-.46Zm4.599-4.69a.75.75 0 0 0-1.184-.921l1.184.92ZM12 22.75c5.937 0 10.75-4.813 10.75-10.75h-1.5A9.25 9.25 0 0 1 12 21.25v1.5ZM1.25 12c0 5.937 4.813 10.75 10.75 10.75v-1.5A9.25 9.25 0 0 1 2.75 12h-1.5ZM12 1.25C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75v-1.5Zm0 1.5A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm-4.502 9.807 2.535 2.282 1.003-1.115-2.534-2.281-1.004 1.114Zm5.087 2.055 4.007-5.152-1.184-.92-4.007 5.151 1.184.921Zm-2.552.227a1.75 1.75 0 0 0 2.552-.227l-1.184-.92a.25.25 0 0 1-.365.032l-1.003 1.115Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckCircle);
export default ForwardRef;
