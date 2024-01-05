/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s)
{
    const stack=[];
    const pairs={
        '(':')',
        '{':'}',
        '[':']'
    };
    for(let i=0;i<s.length();i++)
    {
        const c=s[i];
        if(c in pairs)
        {
            stack.push(c);
        }
        else{
            const lastopened=stack.pop();
            if(pairs[lastopened]!=c)
            {
                return false;
            }
        }
    }
    return stack.length()==0;


    
};

module.exports = { isValid };






