import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFeather = (
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
            d='M1.47 21.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm11.128-9.007a.75.75 0 0 0-1.061-1.06l1.06 1.06Zm6.58-1.44-.607-.438.608.439Zm-3.545 3.547-.44-.608.44.608Zm4.301-12.551-.104-.743.104.743Zm2.047 2.046.743.104-.743-.104ZM6.628 15.325l-.743-.104.743.104Zm2.046 2.047.105.743-.105-.743ZM2.53 22.53l10.068-10.067-1.061-1.06L1.47 21.47l1.06 1.06Zm4.84-7.1c.922-6.557 6.112-11.747 12.67-12.67l-.21-1.485C12.61 2.291 6.9 8.001 5.886 15.221l1.485.209Zm7.824-1.468A14.825 14.825 0 0 1 8.57 16.63l.209 1.485a16.325 16.325 0 0 0 7.293-2.937l-.878-1.216ZM21.239 3.96a14.826 14.826 0 0 1-2.668 6.624l1.216.878a16.326 16.326 0 0 0 2.937-7.293l-1.485-.21Zm-3.33 8.442c.72 0 1.432-.323 1.878-.94l-1.216-.878a.806.806 0 0 1-.662.318v1.5Zm-.897.897c0-.495.402-.897.897-.897v-1.5a2.397 2.397 0 0 0-2.397 2.397h1.5Zm-.94 1.878c.617-.446.94-1.158.94-1.878h-1.5a.81.81 0 0 1-.318.662l.878 1.216ZM20.039 2.76c.713-.1 1.3.487 1.2 1.2l1.485.209a2.55 2.55 0 0 0-2.894-2.894l.209 1.485ZM5.885 15.221a2.55 2.55 0 0 0 2.894 2.894l-.21-1.485a1.05 1.05 0 0 1-1.199-1.2l-1.485-.21Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFeather);
export default ForwardRef;
