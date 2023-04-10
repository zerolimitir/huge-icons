import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilter = (
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
            d='m20.63 5.346.596.455a.759.759 0 0 0 .026-.036l-.621-.42Zm-5.721 7.481-.596-.455a.77.77 0 0 0-.026.036l.622.42Zm-1.05 6.704.527.533-.527-.533Zm-2.178 2.152-.527-.534.527.534Zm-2.59-8.856.622-.419a.763.763 0 0 0-.026-.036l-.596.455ZM3.37 5.346l-.621.42a.738.738 0 0 0 .026.035l.595-.455ZM5.181 2.75H18.82v-1.5H5.18v1.5Zm14.854 2.14-5.722 7.482 1.192.911 5.721-7.482-1.191-.911Zm-6.607 10.325v3.555h1.5v-3.555h-1.5Zm-.097 3.782-2.177 2.152 1.054 1.067 2.178-2.152-1.055-1.067Zm-2.758 1.925v-5.707h-1.5v5.707h1.5Zm-.886-8.55L3.965 4.89l-1.191.911 5.721 7.482 1.192-.911Zm.886 2.843c0-1-.3-1.977-.86-2.807l-1.244.839c.394.583.603 1.268.603 1.968h1.5Zm.58 5.934c-.224.223-.58.047-.58-.227h-1.5c0 1.643 1.989 2.427 3.135 1.294l-1.054-1.067Zm2.274-2.38a.32.32 0 0 1-.096.228l1.055 1.067a1.82 1.82 0 0 0 .542-1.294h-1.5Zm.86-6.361c-.56.83-.86 1.807-.86 2.807h1.5c0-.7.21-1.385.604-1.968l-1.244-.839ZM18.82 2.75c1.155 0 1.81 1.258 1.19 2.176l1.243.84c1.31-1.943-.11-4.516-2.433-4.516v1.5ZM5.18 1.25c-2.324 0-3.743 2.573-2.433 4.515l1.243-.839c-.62-.918.036-2.176 1.19-2.176v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilter);
export default ForwardRef;
