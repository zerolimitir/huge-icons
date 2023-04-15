import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.762 9.291a.922.922 0 0 0-.288.195.724.724 0 0 0-.12.89c.095.168 5.225 4.266 5.425 4.335a.718.718 0 0 0 .665-.119 310.55 310.55 0 0 0 2.667-2.121c2.674-2.14 2.647-2.115 2.647-2.471a.84.84 0 0 0-.274-.571c-.221-.186-.577-.23-.817-.102-.042.022-1.108.867-2.371 1.877L12 13.04l-2.296-1.836c-1.263-1.01-2.329-1.855-2.37-1.876-.123-.066-.425-.086-.572-.037'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionDown);
export default ForwardRef;
