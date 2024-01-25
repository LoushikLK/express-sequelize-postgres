import bcrypt from "bcrypt";

class HashService {
  public async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  public async comparePassword(password: string, hashedPassword: string) {
    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
    return isPasswordMatch;
  }

  public async generateNewHash(text: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedText = await bcrypt.hash(text, salt);
    return hashedText;
  }
}

export default HashService;
