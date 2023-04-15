import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMultiplyCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.014 8.438a.749.749 0 0 0-.585.74c0 .113.022.25.049.304.028.054.593.643 1.256 1.308L10.94 12l-1.209 1.21c-1.231 1.233-1.332 1.357-1.33 1.639a.898.898 0 0 0 .244.539.902.902 0 0 0 .515.212c.273 0 .406-.109 1.63-1.331L12 13.06l1.19 1.186c.654.653 1.251 1.217 1.327 1.255.192.096.511.064.716-.071.286-.19.411-.627.263-.922-.035-.07-.597-.663-1.249-1.318l-1.186-1.189 1.225-1.231c1.316-1.321 1.344-1.358 1.304-1.715a.772.772 0 0 0-.339-.536c-.182-.124-.509-.152-.694-.06-.076.038-.681.611-1.347 1.275L12 10.94l-1.21-1.206c-.665-.663-1.246-1.223-1.29-1.245a.864.864 0 0 0-.486-.051'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMultiplyCircle);
export default ForwardRef;
