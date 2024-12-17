import bcrypt from 'bcrypt';

class HashPass {
    private salt = 10;

    public async createHashPassword (password : string) {
        try{
            const hash = await bcrypt.hash(password as string, this.salt as number)
            return hash;
        }catch(err){
            throw new Error((err as Error).message);
        }
    }

    public async checkPassword (hashPassword : string, password : string){
        try{
            const hash = await bcrypt.compare(password, hashPassword);
            if(hash){
                return true;
            }else{
                return false;
            }
        }catch(err){
            throw new Error((err as Error).message);
        }
    }
}

export default new HashPass();