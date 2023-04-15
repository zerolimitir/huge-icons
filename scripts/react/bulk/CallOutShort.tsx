import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallOutShort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.647 2.326a.755.755 0 0 0-.366.899c.034.107.181.289.472.585l.422.43H14.11c-.628 0-1.151.018-1.272.044-.758.163-.758 1.269 0 1.432.121.026.644.044 1.27.044h1.065l-.422.432c-.365.375-.426.457-.461.62-.123.576.322 1.02.9.898.175-.037.251-.1.962-.805.425-.421.827-.851.894-.955.345-.537.363-1.27.045-1.83-.143-.253-1.59-1.71-1.791-1.804a.738.738 0 0 0-.653.01m4 0a.743.743 0 0 0-.396.569c-.038.336.022.427.834 1.248.543.549.755.79.755.856 0 .067-.213.308-.755.857-.693.702-.758.779-.795.954-.123.578.321 1.022.9.9.175-.037.251-.1.962-.805.425-.421.827-.851.894-.955.345-.537.363-1.27.045-1.83-.143-.253-1.59-1.71-1.791-1.804a.738.738 0 0 0-.653.01'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallOutShort);
export default ForwardRef;
