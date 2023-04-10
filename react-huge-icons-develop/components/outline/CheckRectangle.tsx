import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCheckRectangle = (
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
            d='M8.502 11.443a.75.75 0 1 0-1.004 1.114l1.004-1.114Zm2.033 2.838.501-.557-.501.557Zm1.458-.13.592.461-.592-.46Zm4.599-4.69a.75.75 0 0 0-1.184-.921l1.184.92ZM18 1.25H6v1.5h12v-1.5ZM1.25 6v12h1.5V6h-1.5ZM6 22.75h12v-1.5H6v1.5ZM22.75 18V6h-1.5v12h1.5ZM18 22.75A4.75 4.75 0 0 0 22.75 18h-1.5A3.25 3.25 0 0 1 18 21.25v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm12 1.5A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM7.498 12.557l2.535 2.282 1.003-1.115-2.534-2.281-1.004 1.114Zm5.087 2.055 4.007-5.152-1.184-.92-4.007 5.151 1.184.921Zm-2.552.227a1.75 1.75 0 0 0 2.552-.227l-1.184-.92a.25.25 0 0 1-.365.032l-1.003 1.115Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckRectangle);
export default ForwardRef;
