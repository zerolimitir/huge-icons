import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomePower = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 9.316a.734.734 0 0 0-.398.413c-.091.219-.091 2.323 0 2.542a.748.748 0 0 0 1.396 0c.051-.122.062-.348.061-1.28-.001-1.014-.008-1.148-.075-1.291-.181-.392-.607-.558-.984-.384m-3 1.34c-.364.16-.954 1.059-1.218 1.856-.756 2.284.331 4.784 2.522 5.804 2.327 1.083 5.118.096 6.266-2.216a4.804 4.804 0 0 0 .248-3.585c-.26-.797-.86-1.706-1.227-1.861a.765.765 0 0 0-1.051.701c0 .202.065.337.332.684.977 1.269.852 3.102-.29 4.243a3.225 3.225 0 0 1-2.657.927 3.247 3.247 0 0 1-2.768-2.429c-.099-.389-.1-1.178-.001-1.56.103-.397.336-.875.581-1.193.239-.311.323-.488.322-.676-.002-.271-.239-.613-.492-.708a.894.894 0 0 0-.567.013'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomePower);
export default ForwardRef;
