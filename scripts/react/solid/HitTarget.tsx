import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHitTarget = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M21.66 1.346c-.066.034-.798.738-1.627 1.565-1.149 1.146-1.52 1.493-1.56 1.462l-.293-.234a11.866 11.866 0 0 0-1.54-.993 10.011 10.011 0 0 0-10.36.66c-3.543 2.48-5.102 6.952-3.858 11.059a9.76 9.76 0 0 0 2.516 4.196c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645 1.494-1.93 2.227-4.175 2.143-6.56a9.74 9.74 0 0 0-.555-2.959c-.167-.48-.654-1.518-.873-1.858l-.126-.196-1.193 1.192-1.192 1.191.132.289c.194.426.371 1.012.465 1.537.119.66.118 1.681-.001 2.341a6.932 6.932 0 0 1-1.428 3.103c-1.416 1.732-3.7 2.678-5.889 2.437-2.6-.285-4.761-1.964-5.66-4.397-.507-1.372-.532-3.038-.065-4.46.163-.496.585-1.325.908-1.78.345-.486 1.083-1.224 1.569-1.569.455-.323 1.284-.745 1.78-.908a6.853 6.853 0 0 1 5.059.321c.396.189 1.134.647 1.232.766.036.043-.063.163-.483.582l-.529.528-.194-.139c-.47-.334-1.249-.662-1.908-.803-.786-.168-1.87-.102-2.663.162-1.062.354-2.039 1.069-2.651 1.94a5.267 5.267 0 0 0 1.668 7.594c.394.229.809.396 1.329.533.609.162 1.489.201 2.124.094 2.103-.351 3.735-1.87 4.266-3.97.1-.396.109-.495.11-1.211 0-.73-.007-.808-.114-1.22-.19-.729-.045-.782-1.292.471l-1.085 1.089-.064.292c-.21.964-.991 1.763-1.985 2.032-.349.094-1.01.095-1.36 0a2.815 2.815 0 0 1-1.982-1.984c-.092-.346-.092-1.012-.001-1.355a2.784 2.784 0 0 1 1.988-1.987c.316-.083.978-.094 1.275-.021.262.064.72.241.72.278 0 .014-.257.28-.57.591l-.57.565-.262.019a1.18 1.18 0 0 0-.814.368c-.609.626-.368 1.717.446 2.023.786.295 1.634-.25 1.682-1.081l.015-.26 4.673-4.68c2.57-2.574 4.701-4.738 4.736-4.808.127-.254.048-.673-.162-.857-.222-.195-.596-.253-.834-.129'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHitTarget);
export default ForwardRef;